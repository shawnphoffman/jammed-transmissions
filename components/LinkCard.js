import styles from './LinkCard.module.css'

export default function LinkCard({ link, bg, icon, title, color = 'var(--white)' }) {
	return (
		<a className={styles.container} href={link} target="_blank" rel="noopener noreferrer" style={{ background: bg, color: color }}>
			<i className={icon} aria-hidden />
			<h2 className={styles.title}>{title}</h2>
		</a>
	)
}
