import { memo } from 'react'
import Image from 'next/image'

import styles from './Gonk.module.css'
import GonkImg from './gonk@3x.png'

const Gonk = () => {
	return (
		<div className={styles.wrapper}>
			<Image src={GonkImg} width="150" height="150" alt="" />
		</div>
	)
}
export default memo(Gonk)
