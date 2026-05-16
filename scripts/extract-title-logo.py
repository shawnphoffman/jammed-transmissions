#!/usr/bin/env python3
"""Extract title logo paths from app/jt.svg into components/core/titleLogoPaths.ts.

Handles both `<path>` and `<polygon>` elements with `fill="#fff"` (polygons
are converted to equivalent path d strings). The outline is the single path
without a white fill (typically tagged `mix-blend-mode="darken"`).

Each white-filled element is split on `M` commands into subpaths. Subpaths
whose bounding box is contained within another subpath's bounding box are
treated as counter holes and grouped with their parent so they can be rendered
as one path with fill-rule=evenodd (preserving the hole). Disjoint subpaths
(e.g. the top and bottom of a J) stay as independent pieces that animate alone.

Usage:
    python3 scripts/extract-title-logo.py
"""

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SVG_PATH = ROOT / 'app' / 'jt.svg'
OUT_PATH = ROOT / 'components' / 'core' / 'titleLogoPaths.ts'

CMD_RE = re.compile(r'([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]*)')
NUM_RE = re.compile(r'-?\d*\.?\d+(?:[eE][+-]?\d+)?')


def parse_nums(args: str) -> list[float]:
	return [float(n) for n in NUM_RE.findall(args)]


def subpath_bbox(d: str) -> tuple[float, float, float, float]:
	"""Approximate bbox of an SVG path subpath. Includes control points for curves."""
	x, y = 0.0, 0.0
	xs: list[float] = []
	ys: list[float] = []
	for cmd, args in CMD_RE.findall(d):
		nums = parse_nums(args)
		rel = cmd.islower()
		c = cmd.upper()
		if c == 'M' or c == 'L' or c == 'T':
			for i in range(0, len(nums), 2):
				nx, ny = nums[i], nums[i + 1]
				x, y = (x + nx, y + ny) if rel else (nx, ny)
				xs.append(x)
				ys.append(y)
		elif c == 'H':
			for nx in nums:
				x = x + nx if rel else nx
				xs.append(x)
				ys.append(y)
		elif c == 'V':
			for ny in nums:
				y = y + ny if rel else ny
				xs.append(x)
				ys.append(y)
		elif c in ('C', 'S', 'Q'):
			step = {'C': 6, 'S': 4, 'Q': 4}[c]
			for i in range(0, len(nums), step):
				for j in range(0, step, 2):
					cx, cy = nums[i + j], nums[i + j + 1]
					if rel:
						cx += x
						cy += y
					xs.append(cx)
					ys.append(cy)
				if rel:
					x, y = xs[-2], ys[-2]
				else:
					x, y = nums[i + step - 2], nums[i + step - 1]
		# Arc (A) commands aren't used in this SVG; add support if a new logo needs them.
	if not xs:
		return (0.0, 0.0, 0.0, 0.0)
	return (min(xs), min(ys), max(xs), max(ys))


def contains(outer: tuple[float, float, float, float], inner: tuple[float, float, float, float]) -> bool:
	return outer[0] <= inner[0] and outer[1] <= inner[1] and outer[2] >= inner[2] and outer[3] >= inner[3]


def bbox_area(bb: tuple[float, float, float, float]) -> float:
	return (bb[2] - bb[0]) * (bb[3] - bb[1])


def split_on_moves(d: str) -> list[str]:
	parts = re.split(r'(?=[Mm])', d)
	return [p for p in parts if p.strip()]


def group_pieces(subs: list[str]) -> list[list[str]]:
	"""Group subpaths so counter holes stay with their containing parent."""
	bboxes = [subpath_bbox(d) for d in subs]
	parent = [None] * len(subs)
	for i in range(len(subs)):
		for j in range(len(subs)):
			if i == j:
				continue
			if contains(bboxes[j], bboxes[i]):
				if parent[i] is None or bbox_area(bboxes[parent[i]]) > bbox_area(bboxes[j]):
					parent[i] = j
	pieces: list[list[str]] = []
	for root in range(len(subs)):
		if parent[root] is None:
			piece = [subs[root]]
			for child in range(len(subs)):
				if parent[child] == root:
					piece.append(subs[child])
			pieces.append(piece)
	return pieces


def polygon_to_d(points: str) -> str:
	"""Convert a polygon `points` attribute to an equivalent path d-string."""
	coords = parse_nums(points)
	if len(coords) < 4 or len(coords) % 2 != 0:
		raise ValueError(f'polygon has odd or insufficient coordinates: {points!r}')
	pairs = [(coords[i], coords[i + 1]) for i in range(0, len(coords), 2)]
	d = f'M{pairs[0][0]},{pairs[0][1]}'
	for x, y in pairs[1:]:
		d += f'L{x},{y}'
	d += 'Z'
	return d


def extract_white_shapes(svg: str) -> list[tuple[int, str]]:
	"""Return (document_position, d_string) for every white-filled path or polygon."""
	shapes: list[tuple[int, str]] = []
	for m in re.finditer(r'<path\s+d="([^"]+)"[^>]*fill="#fff"', svg):
		shapes.append((m.start(), m.group(1)))
	for m in re.finditer(r'<polygon\s+points="([^"]+)"[^>]*fill="#fff"', svg):
		shapes.append((m.start(), polygon_to_d(m.group(1))))
	shapes.sort(key=lambda s: s[0])
	return shapes


def extract_outline(svg: str) -> str:
	"""Find the single non-white-filled path used as the outline/shadow layer."""
	candidates = [m.group(1) for m in re.finditer(r'<path\s+d="([^"]+)"([^>]*)>', svg) if 'fill="#fff"' not in m.group(2)]
	if not candidates:
		raise ValueError('no outline path found (a <path> without fill="#fff")')
	if len(candidates) > 1:
		raise ValueError(f'expected 1 outline path, found {len(candidates)}')
	return candidates[0]


def main() -> int:
	if not SVG_PATH.exists():
		print(f'error: {SVG_PATH} not found', file=sys.stderr)
		return 1
	svg = SVG_PATH.read_text()
	white_shapes = extract_white_shapes(svg)
	if not white_shapes:
		print('error: no white-filled <path> or <polygon> elements found in SVG', file=sys.stderr)
		return 1
	try:
		outline = extract_outline(svg)
	except ValueError as e:
		print(f'error: {e}', file=sys.stderr)
		return 1

	white = [d for _, d in white_shapes]
	letter_pieces = [group_pieces(split_on_moves(d)) for d in white]

	parts: list[str] = []
	parts.append('// Auto-generated by scripts/extract-title-logo.py from app/jt.svg. Do not edit by hand.\n')
	parts.append(f'export const OUTLINE_PATH = {json.dumps(outline)}\n\n')
	parts.append("// Each letter is split into 'pieces'. A piece with multiple d-strings is a shape\n")
	parts.append('// with counter holes (rendered as one path with fill-rule=evenodd). Pieces are\n')
	parts.append("// disjoint visual chunks (e.g. J's top bar and hook), each animatable independently.\n")
	parts.append('export const LETTER_PIECES: readonly (readonly (readonly string[])[])[] = [\n')
	for letter in letter_pieces:
		parts.append('\t[\n')
		for piece in letter:
			parts.append('\t\t[')
			for d in piece:
				parts.append(json.dumps(d) + ', ')
			parts.append('],\n')
		parts.append('\t],\n')
	parts.append(']\n')

	OUT_PATH.write_text(''.join(parts))
	total_pieces = sum(len(pieces) for pieces in letter_pieces)
	total_subs = sum(len(p) for pieces in letter_pieces for p in pieces)
	print(f'wrote {OUT_PATH.relative_to(ROOT)}: {len(white)} letters, {total_pieces} pieces, {total_subs} subpaths')
	return 0


if __name__ == '__main__':
	sys.exit(main())
