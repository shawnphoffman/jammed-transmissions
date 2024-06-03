import { getSpotifyReviews } from '@/app/actions'

import styles from './Ratings.module.css'

export default async function RatingsSpotify() {
	const spotifyData = await getSpotifyReviews()

	// console.log({ spotifyData })

	if (!spotifyData || !spotifyData.rating) return null

	return (
		<a className={`${styles.container} ${styles.spotify}`} href={spotifyData.url || ''} target="_blank" rel="noopener noreferrer">
			<div>{spotifyData.rating.toFixed(1)}</div>
			<i className={`fa-solid fa-star-sharp ${styles.star}`} aria-hidden />
			<div>on Spotify</div>
		</a>
	)
}
