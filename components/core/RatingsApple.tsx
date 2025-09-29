import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarSharp } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'

import { getAppleReviews } from '@/app/actions'

export default async function RatingsApple() {
	const appleData = await getAppleReviews()

	if (!appleData || !appleData.appleRating) return null

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-xs font-bold leading-normal text-white rounded-lg whitespace-nowrap bg-applepodcasts"
			href={appleData.appleRatingUrl || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{appleData.appleRating}</div>
			<FontAwesomeIcon icon={faStarSharp} className="text-[0.65rem] mx-0.5" />
			<div>on Apple Podcasts</div>
		</a>
	)
}
