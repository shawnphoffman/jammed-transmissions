'use server'

import { fetchWithRetry } from '@shawnphoffman/pod-sites-shared/fetch'
import { XMLParser } from 'fast-xml-parser'
import purify from 'isomorphic-dompurify'

import { appleRatingUrl, rssFeedUrl, spotifyUrl } from './(pages)/(links)/links'

export async function getAppleReviews() {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/apple?url=${appleRatingUrl}`, {
			next: { revalidate: 60 * 60 * 1 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Apple API error: ${res.status} ${res.statusText}`)
			return {}
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Apple API returned empty response')
			return {}
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Apple API returned error message:', text)
			return {}
		}

		const data = JSON.parse(text)
		const { rating, ratingsUrl, reviews } = data

		return {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		}
	} catch (e) {
		console.warn('Apple API fetch error:', e)
		return {}
	}
}
// TODO
export const getReviews = getAppleReviews

export async function getSpotifyReviews() {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/spotify-scrape?url=${spotifyUrl}`, {
			next: { revalidate: 60 * 60 * 6 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Spotify API error: ${res.status} ${res.statusText}`)
			return {}
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Spotify API returned empty response')
			return {}
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Spotify API returned error message:', text)
			return {}
		}

		const data = JSON.parse(text)
		return {
			url: data?.url,
			rating: data?.vals?.rating ? Number(data?.vals?.rating) : undefined,
		}
	} catch (error) {
		console.warn('Failed to fetch Spotify data', error)
		return {}
	}
}

export async function getEpisodes() {
	try {
		// await new Promise(resolve => setTimeout(resolve, 5000))
		const res = await fetchWithRetry(rssFeedUrl, {
			next: { tags: ['episodes'] },
			timeout: 8000,
			retries: 1,
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
	const test = text?.includes('Episode 161')

	if (test) {
		console.log('text', text)
	}

	if (!text) return ''

	text = text.replace(/<p><br><\/p>|\n/gim, '\n\n')

	text = purify.sanitize(text, { ALLOWED_TAGS: ['a'] })
	if (test) {
		console.log('wow1', text)
	}

	text = text.replace(/\s*All the goods.*/gim, '')
	text = text.replace(/\s*Please rate.*/gim, '')

	if (test) {
		console.log('wow2', text)
	}

	const regexFinal = /[\r\n]{3,}/g
	text = text.replace(regexFinal, '\n').replace(/[\r\n]+\s*$/g, '')

	if (test) {
		console.log('wow3', text)
	}

	return text
}
