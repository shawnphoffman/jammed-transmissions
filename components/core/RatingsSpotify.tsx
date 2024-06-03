import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getSpotifyReviews } from '@/app/actions'

export default async function RatingsSpotify() {
	const spotifyData = await getSpotifyReviews()

	if (!spotifyData || !spotifyData.rating) return null

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-xs font-bold leading-normal text-white rounded-lg whitespace-nowrap bg-spotify"
			href={spotifyData.url || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{spotifyData.rating.toFixed(1)}</div>
			<FontAwesomeIcon icon={'fa-solid fa-star-sharp' as IconProp} className="text-[0.65rem] mx-0.5" />
			<div>on Spotify</div>
		</a>
	)
}
