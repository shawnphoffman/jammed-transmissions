'use client'

import { memo } from 'react'
import { XMLParser } from 'fast-xml-parser'

import Episode from './Episode'
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
		const episodes = parsed.rss.channel.item.map(ep => ({
			guid: ep.guid['#text'],
			title: ep.title,
			imgSrc: ep['itunes:image']['@_href'],
			summary: ep['itunes:summary'],
			link: ep.link,
			pubDate: ep.pubDate,
		}))

		return {
			raw: parsed.rss.channel.item,
			episodes,
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

	return (
		<div className={styles.episodesContainer}>
			{episodes.map(ep => (
				<Episode key={ep.guid} episode={ep} />
			))}
		</div>
	)
}

export default memo(Episodes)
