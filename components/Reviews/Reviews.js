import { memo } from 'react'

import styles from './Reviews.module.css'
import Stars from './Stars'

const dataUrl = 'https://api.shawn.party/api/jammed-transmissions/reviews'

async function getData() {
	try {
		const res = await fetch(dataUrl, { next: { revalidate: 60 * 60 * 12 } })
		const data = await res.json()
		const { reviews } = data

		return {
			reviews,
		}
	} catch {
		return {}
	}
}

const filteredAuthors = ['']

const Reviews = async () => {
	const data = await getData()

	const { reviews } = data

	if (!reviews) return null

	const filteredReviews = reviews.reduce((memo, acc) => {
		if (filteredAuthors.includes(acc.author)) {
			return memo
		}
		if (acc.stars !== '5') {
			return memo
		}
		memo.push(acc)
		return memo
	}, [])

	if (!filteredReviews) return null

	return (
		<>
			<div className={styles.heading}>Recent Reviews</div>
			{filteredReviews.map(r => (
				<div className={styles.container} key={r.title}>
					<div className={styles.header}>
						<div className={styles.byline}>
							<div className={styles.title}>{`"${r.title}"`}</div>
							<div className={styles.author}>{r.author}</div>
						</div>
						<Stars count={r.stars} />
					</div>
					<div className={styles.text}>{r.text}</div>
				</div>
			))}
		</>
	)
}

export default memo(Reviews)
