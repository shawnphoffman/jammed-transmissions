import { getReviews } from 'app/actions'

import styles from './Ratings.module.css'

export default async function RatingsApple() {
	const appleData = await getReviews()

	// console.log({ appleData })

	if (!appleData || !appleData.appleRating) return null

	return (
		<a className={styles.container} href={appleData.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
			<div>{appleData.appleRating}</div>
			<i className={`fa-solid fa-star-sharp ${styles.star}`} aria-hidden />
			<div>on Apple Podcasts</div>
		</a>
	)
}
