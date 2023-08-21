'use client'

import { memo } from 'react'
import Linkify from 'react-linkify'

import styles from './Episodes.module.css'

const options = { year: 'numeric', month: 'long', day: 'numeric' }

const Episodes = async ({ episode }) => {
	// if (!episode) return null

	const pubDate = new Date(episode.pubDate).toLocaleDateString('en-US', options)

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{episode.title}</h2>

			<div className={styles.detailsContainer}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={episode.imgSrc} alt={episode.title} className={styles.cover} />
				<div className={styles.summary}>
					<div className={styles.pubDate}>Posted: {pubDate}</div>
					<Linkify>{episode.summary}</Linkify>
					<a className={styles.link} href={styles.link}>
						Episode Link
					</a>
				</div>
			</div>
		</div>
	)
}

export default memo(Episodes)
