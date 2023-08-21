import { memo } from 'react'

import styles from 'app/Global.module.css'
import Episodes from 'components/Episodes/Episodes'

const Home = ({}) => {
	return (
		<>
			<div className={styles.pageDescription}>A positive, listener interactive Star Wars podcast since 2018</div>
			<Episodes />
		</>
	)
}

export default memo(Home)
