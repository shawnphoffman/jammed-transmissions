import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
			<FontAwesomeIcon icon={'fa-solid fa-star-sharp' as IconProp} className="text-[0.65rem] mx-0.5" />
			<div>on Apple Podcasts</div>
		</a>
	)
}
