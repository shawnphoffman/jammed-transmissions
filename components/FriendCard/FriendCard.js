import { memo } from 'react'

import styles from './FriendCard.module.css'

const FriendCard = ({ title, href }) => {
	return (
		<div className={styles.wrapper}>
			<a className={styles.cover} href={href} target="_blank" rel="noopener noreferrer">
				{/* <i className={`fa-solid fa-podcast`} aria-hidden="true"></i> */}
				<h2 className={styles.title}>{title}</h2>
			</a>
		</div>
	)
}

export default memo(FriendCard)
