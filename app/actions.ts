'use server'

import { XMLParser } from 'fast-xml-parser'

import { appleRatingUrl, rssFeedUrl, spotifyUrl } from './(pages)/(links)/links'

export async function getAppleReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/apple?url=${appleRatingUrl}`, {
			next: { revalidate: 60 * 60 * 1 },
		})
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
// TODO
export const getReviews = getAppleReviews

export async function getSpotifyReviews() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/spotify?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 1 },
		})
		const data = await res.json()
		return data
	} catch {
		return {}
	}
}

export async function getEpisodes() {
	try {
		// await new Promise(resolve => setTimeout(resolve, 5000))
		const res = await fetch(rssFeedUrl, {
			next: { tags: ['episodes'] },
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
			summary: cleanSummary(ep['itunes:summary']),
			link: ep.link,
			pubDate: ep.pubDate,
		}))

		return {
			episodes,
		}
	} catch (error) {
		console.error(error)
		return { episodes: [] }
	}
}

function cleanSummary(text: string) {
	if (!text) return ''

	const regex2 = /.*(?:All\ the\ goods).*/gm
	text = text.replace(regex2, '')

	const regexFinal = /[\r\n]{3,}/g
	text = text.replace(regexFinal, '\n').replace(/[\r\n]+\s*$/g, '')

	return text
}
