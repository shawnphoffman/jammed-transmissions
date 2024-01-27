'use server'

import { XMLParser } from 'fast-xml-parser'

export async function getReviews() {
	try {
		const res = await fetch('https://api.shawn.party/api/jammed-transmissions/reviews', { next: { revalidate: 60 * 60 * 4 } })
		const data = await res.json()
		const { rating, ratingsUrl, reviews } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		}
	} catch {
		return {}
	}
}

export async function getSpotifyReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${'https://open.spotify.com/show/7Cxgn8198cn9rysCF8MWzo'}`, {
			next: { revalidate: 60 * 60 * 4 },
		})
		return await res.json()
	} catch {
		return {}
	}
}

export async function getEpisodes() {
	try {
		const res = await fetch('https://anchor.fm/s/d8972e20/podcast/rss', {
			next: { revalidate: 60 * 60 * 1 },
		})
		const xml = await res.text()
		const parser = new XMLParser({
			ignoreAttributes: false,
			attributeNamePrefix: '@_',
		})
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
			episodes,
		}
	} catch (error) {
		return {}
	}
}
