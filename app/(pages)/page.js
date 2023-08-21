import { memo } from 'react'

import styles from 'app/Global.module.css'
import EpisodesWrapper from 'components/Episodes/EpisodesWrapper'

const Home = ({}) => {
	return (
		<>
			<div className={styles.pageDescription}>A positive, listener interactive Star Wars podcast since 2018</div>
			<EpisodesWrapper />
		</>
	)
}

export default memo(Home)
