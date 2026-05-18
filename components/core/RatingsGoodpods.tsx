import { faStarSharp } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { goodpodsUrl } from '@/app/(pages)/(links)/links'

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

async function getGoodpodsReviews() {
	try {
		const res = await fetchWithRetry(`https://api.shawn.party/api/podcast-data/goodpods?url=${goodpodsUrl}`, {
			next: { revalidate: 21600 },
			timeout: 5000,
			retries: 1,
		})

		if (!res.ok) {
			console.warn(`Goodpods API error: ${res.status} ${res.statusText}`)
			return {}
		}

		const text = await res.text()
		if (!text || text.trim() === '') {
			console.warn('Goodpods API returned empty response')
			return {}
		}

		if (text.toLowerCase().startsWith('an error') || text.toLowerCase().includes('error')) {
			console.warn('Goodpods API returned error message:', text)
			return {}
		}

		const data = JSON.parse(text)
		return data
	} catch (e) {
		console.warn('Goodpods API fetch error:', e)
		return {}
	}
}

export default async function RatingsGoodpods() {
	const spotifyData = await getGoodpodsReviews()

	if (!spotifyData || !spotifyData.rating) return null

	return (
		<a
			className="flex flex-row items-center px-2 py-1 text-xs font-bold leading-normal text-black rounded-lg whitespace-nowrap bg-goodpods"
			href={spotifyData.url || ''}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div>{spotifyData.rating.toFixed(1)}</div>
			<FontAwesomeIcon icon={faStarSharp} className="text-[0.85em] mx-0.5" />
			<div>on Goodpods</div>
		</a>
	)
}
