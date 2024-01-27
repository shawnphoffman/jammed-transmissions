import styles from './FriendCard.module.css'

export default function FriendCard({ title, href }) {
	return (
		<a className={styles.container} href={href} target="_blank" rel="noopener noreferrer">
			<h2 className={styles.title}>{title}</h2>
		</a>
	)
}
