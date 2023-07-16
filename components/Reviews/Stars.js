import { memo } from 'react'

import styles from './Reviews.module.css'

const Stars = ({ count }) => {
	const numStars = Number(count)

	let solidStars = []
	for (let i = 1; i <= numStars; i++) {
		solidStars.push(<i className="fa-solid fa-star" key={'solid' + i} />)
	}
	let emptyStars = []
	for (let i = 1; i <= 5 - numStars; i++) {
		emptyStars.push(<i className="fa-duotone fa-star" key={'empty' + i} />)
	}

	return (
		<div className={styles.starContainer}>
			{solidStars}
			{emptyStars}
		</div>
	)
}

export default memo(Stars)
