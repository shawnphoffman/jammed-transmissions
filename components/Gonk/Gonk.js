import Image from 'next/image'

import styles from './Gonk.module.css'
import GonkImg from './gonk@3x.png'

export default function Gonk() {
	return (
		<div className={styles.wrapper}>
			<Image src={GonkImg} width="150" height="150" alt="" />
		</div>
	)
}
