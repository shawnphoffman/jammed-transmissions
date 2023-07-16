import { memo } from 'react'
import styles from 'app/Global.module.css'

const ListenNow = ({}) => {
	return (
		<div className={styles.pageDescription}>
			<iframe
				className={styles.iframe}
				src="https://open.spotify.com/embed/show/7Cxgn8198cn9rysCF8MWzo?utm_source=generator"
				width="100%"
				height="352"
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				loading="lazy"
			></iframe>
		</div>
	)
}

export default memo(ListenNow)
