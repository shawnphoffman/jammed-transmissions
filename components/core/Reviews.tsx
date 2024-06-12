import { getAppleReviews } from '@/app/actions'

import Stars from './Stars'

type Review = {
	title: string
	author: string
	stars: string
	text: string
}

export default async function Reviews() {
	const { reviews } = await getAppleReviews()

	if (!reviews) return null

	const filteredReviews = reviews.reduce((memo, acc) => {
		if (acc.stars !== '5' && !!process.env.VERCEL_URL) {
			return memo
		}
		memo.push(acc)
		return memo
	}, [])

	if (!filteredReviews || !filteredReviews.length) return null

	return (
		<div className="p-0 mt-2">
			<div className="text-2xl font-bold text-white">Recent Reviews</div>
			{filteredReviews.map((r: Review) => (
				<div
					key={r.title}
					className="flex flex-col justify-start px-4 py-2 m-2 text-sm text-left border rounded-lg border-slate-800 bg-slate-950/50"
				>
					<div className="flex flex-row items-center justify-between">
						<div className="flex flex-col items-start gap-1 sm:gap-4 sm:flex-row sm:items-center">
							<div className="font-bold text-brand-orange">{`"${r.title}"`}</div>
							<div className="text-xs italic text-brand-shade-1"> {r.author}</div>
						</div>
						<Stars count={r.stars} />
					</div>
					<div className="p-2 pb-0 text-xs leading-normal">{r.text}</div>
				</div>
			))}
		</div>
	)
}
