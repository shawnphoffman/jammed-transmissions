import Image from 'next/image'
import Link from 'next/link'

import { goodpodsUrl } from '@/app/(pages)/(links)/links'

type Award = {
	// TODO - Add "name"
	imageHeight: number
	imageWidth: number
	frequency: string
	linkUrl: string
	imageUrl: string
	category: string
}

type AwardsResponse = {
	awards: Award[]
	url: string
}

// Utility function to add a hard timeout to fetch calls. Uses Promise.race so
// we stop waiting at `timeout`ms even if the fetch implementation ignores the
// AbortSignal (which can happen with some runtimes / Next.js fetch wrappers).
async function fetchWithTimeout(url: string, options: RequestInit & { timeout?: number } = {}) {
	const { timeout = 10000, ...fetchOptions } = options

	const controller = new AbortController()

	let timeoutId: ReturnType<typeof setTimeout> | undefined
	const timeoutPromise = new Promise<never>((_, reject) => {
		timeoutId = setTimeout(() => {
			controller.abort()
			reject(new Error(`Request timeout after ${timeout}ms`))
		}, timeout)
	})

	const fetchPromise = fetch(url, {
		...fetchOptions,
		signal: controller.signal,
	})
	// Swallow any late rejection (e.g. AbortError that fires after the race has
	// already been won by timeoutPromise) so it doesn't surface as an unhandled
	// promise rejection and crash the Node process.
	fetchPromise.catch(() => {})

	try {
		const response = await Promise.race([fetchPromise, timeoutPromise])
		return response
	} catch (error) {
		if (error instanceof Error && error.name === 'AbortError') {
			throw new Error(`Request timeout after ${timeout}ms`)
		}
		throw error
	} finally {
		if (timeoutId) clearTimeout(timeoutId)
	}
}

async function fetchWithRetry(url: string, options: RequestInit & { timeout?: number; retries?: number } = {}) {
	const { retries = 2, ...fetchOptions } = options
	let lastError: Error | null = null

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			return await fetchWithTimeout(url, fetchOptions)
		} catch (error) {
			lastError = error instanceof Error ? error : new Error(String(error))

			if (attempt === retries) {
				break
			}

			const delay = Math.min(1000 * Math.pow(2, attempt), 5000)
			await new Promise(resolve => setTimeout(resolve, delay))
		}
	}

	throw lastError || new Error('Request failed after all retries')
}

export async function getAwards() {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/goodpods-scrape?url=${goodpodsUrl}`, {
			next: { revalidate: 3600 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Awards API error: ${res.status} ${res.statusText}`)
			return []
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Awards API returned empty response')
			return []
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Awards API returned error message:', text)
			return []
		}

		const data = JSON.parse(text)
		const { awards } = data as AwardsResponse
		return awards
	} catch (e) {
		console.warn('Awards API fetch error:', e)
		return []
	}
}

export default async function Awards() {
	let awards: Award[] = []

	try {
		awards = await getAwards()
	} catch (e) {
		console.error(e)
		return null
	}

	// console.log('Awards.awards', awards)

	if (!awards || !awards.length) {
		return null
	}

	return (
		<div className="flex flex-row flex-wrap justify-center flex-1 gap-2 gap-y-0.5 items-center">
			{awards.map(award =>
				award.linkUrl ? (
					<Link
						title="Goodpods Award"
						key={award.linkUrl}
						href={award.linkUrl}
						target="_blank"
						className={`flex flex-col items-center`} /*aria-label={award.name}*/
					>
						<Image src={award.imageUrl} alt="" width={award.imageWidth} height={award.imageHeight} />
					</Link>
				) : (
					<div key={award.linkUrl} className={`flex flex-col items-center`}>
						<Image src={award.imageUrl} alt="" width={award.imageWidth} height={award.imageHeight} />
					</div>
				)
			)}
		</div>
	)
}
