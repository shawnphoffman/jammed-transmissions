'use client'

import { motion } from 'motion/react'

import { LETTER_PIECES, OUTLINE_PATH } from './titleLogoPaths'

const HOVER_FILL = '#99f' // brand-shade-2

const pieceStyle = {
	transformBox: 'fill-box' as const,
	transformOrigin: 'center' as const,
	willChange: 'transform',
}

function rand(letterIdx: number, pieceIdx: number, salt: number) {
	const n = Math.sin(letterIdx * 928.371 + pieceIdx * 53.17 + salt * 17.39) * 43758.5453
	return n - Math.floor(n)
}

function jitter(letterIdx: number, pieceIdx: number) {
	return {
		y: (rand(letterIdx, pieceIdx, 1) < 0.5 ? -1 : 1) * (4 + rand(letterIdx, pieceIdx, 5) * 18),
		rotate: (rand(letterIdx, pieceIdx, 2) < 0.5 ? -1 : 1) * (4 + rand(letterIdx, pieceIdx, 6) * 14),
		stiffness: 220 + rand(letterIdx, pieceIdx, 3) * 180,
		damping: 10 + rand(letterIdx, pieceIdx, 4) * 8,
	}
}

export default function TitleLogo() {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 901.208372 367.19354" className="h-auto max-w-[700px] w-full" aria-hidden="true">
			<g>
				<path d={OUTLINE_PATH} />
				{LETTER_PIECES.map((pieces, li) =>
					pieces.map((subs, pi) => {
						const j = jitter(li, pi)
						return (
							<motion.path
								key={`${li}-${pi}`}
								d={subs.join(' ')}
								fillRule="evenodd"
								fill="#fff"
								stroke="#231f20"
								strokeLinejoin="round"
								strokeWidth={2.474912}
								style={pieceStyle}
								transition={{ type: 'spring', stiffness: 10, damping: 18, mass: 1.2 }}
								whileHover={{
									y: j.y,
									rotate: j.rotate,
									fill: HOVER_FILL,
									transition: { type: 'spring', stiffness: j.stiffness, damping: j.damping },
								}}
							/>
						)
					})
				)}
			</g>
		</svg>
	)
}
