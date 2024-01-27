import { getReviews, getSpotifyReviews } from 'app/actions'

import styles from './Ratings.module.css'

export default async function Ratings() {
	const [appleData, spotifyData] = await Promise.all([getReviews(), getSpotifyReviews()])

	if ((!appleData || !appleData.appleRating) && (!spotifyData || !spotifyData.rating)) return null

	return (
		<div className={styles.wrapper}>
			{appleData && (
				<a className={styles.container} href={appleData.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
					<div>{appleData.appleRating}</div>
					<i className={`fa-solid fa-star-sharp ${styles.star}`} aria-hidden />
					<div>on Apple Podcasts</div>
				</a>
			)}
			{spotifyData && spotifyData.rating && (
				<a className={`${styles.container} ${styles.spotify}`} href={spotifyData.url || ''} target="_blank" rel="noopener noreferrer">
					<div>{spotifyData.rating.toFixed(1)}</div>
					<i className={`fa-solid fa-star-sharp ${styles.star}`} aria-hidden />
					<div>on Spotify</div>
				</a>
			)}
		</div>
	)
}
