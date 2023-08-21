'use client'

import { memo } from 'react'
import { XMLParser } from 'fast-xml-parser'

import styles from './Episodes.module.css'

const dataUrl = 'https://anchor	.fm/s/d8972e20/podcast/rss'
const xmlOptions = {
	ignoreAttributes: false,
	attributeNamePrefix: '@_',
}

export const revalidate = 60 * 60 * 12

async function getData() {
	try {
		var res = await fetch(dataUrl)
		var xml = await res.text()

		const parser = new XMLParser(xmlOptions)
		const parsed = parser.parse(xml)
		const episodes = parsed.rss.channel.item

		return {
			episodes,
			// episodes: [{ title: 'Test 1' }, { title: 'Test 2' }, { title: 'Test 3' }],
		}
	} catch (error) {
		return {}
	}
}

const Episodes = async () => {
	const data = await getData()

	const { episodes } = data

	if (!episodes) return null

	console.log(episodes[0])

	return episodes.map(ep => (
		<div className={styles.container} key={ep.guid['#text']}>
			<div>{ep.title}</div>
			<div style={{ display: 'flex', flexDirection: 'row' }}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img src={ep['itunes:image']['@_href']} alt={ep.title} width={100} height={100} />
				<div>
					<div>{ep['itunes:summary']}</div>
					<div>{ep.link}</div>
					<div>{ep.pubDate}</div>
				</div>
			</div>
		</div>
	))
}

export default memo(Episodes)
