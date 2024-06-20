import { faStarSharp } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { goodpodsUrl } from '@/app/(pages)/(links)/links'

async function getGoodpodsReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/goodpods?url=${goodpodsUrl}`, {
			next: { revalidate: 21600 }, // 60 * 60 * 6
		})
		const data = await res.json()
		// console.log('getGoodpodsReviews', data)
		return data
	} catch {
		return {}
	}
}

export default async function RatingsGoodpods() {
	const spotifyData = await getGoodpodsReviews()

	if (!spotifyData || !spotifyData.rating) return null

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-xs font-bold leading-normal text-black rounded-lg whitespace-nowrap bg-goodpods"
			href={spotifyData.url || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{spotifyData.rating.toFixed(1)}</div>
			<FontAwesomeIcon icon={faStarSharp} className="text-[0.85em] mx-0.5" />
			<div>on Goodpods</div>
		</a>
	)
}
