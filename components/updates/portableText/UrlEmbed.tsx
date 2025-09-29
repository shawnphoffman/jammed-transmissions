import { Suspense } from 'react'
import Link from 'next/link'

import Loading from '@/components/core/Loading'

type Props = {
	url: string
	overrideTitle?: string
}

async function UrlEmbed({ url, overrideTitle }: Props) {
	async function fetchMeta() {
		try {
			const fetchUrl = `https://api.shawn.party/api/open-graph?scrape=${url}`
			const response = await fetch(fetchUrl)
			const data = await response.json()
			return data
		} catch (error) {
			console.error('Error fetching meta', error)
		}
	}

	if (!url) return null

	const parsedUrl = new URL(url as string)
	if (!parsedUrl) {
		return null
	}

	// await new Promise(resolve => setTimeout(resolve, 2000))

	const meta = await fetchMeta()

	const image = meta?.og?.image || meta?.images[0]?.src

	return (
		<div className="flex flex-row items-center">
			{/* eslint-disable-next-line @next/next/no-img-element */}
			<img className="max-w-36 " src={image} alt="" />
			<div className="flex flex-col leading-tight gap-0.5 py-2 px-4">
				<span className="font-semibold transition-colors ">{overrideTitle ?? meta.meta.title}</span>
				<span className="hidden text-sm text-white/65 sm:line-clamp-2">{meta.meta.description}</span>
			</div>
		</div>
	)
}

const Loader = () => (
	<div className="w-full p-4 text-center">
		<Loading />
	</div>
)

export default function UrlEmbedLoader({ url, overrideTitle }: Props) {
	return (
		<Link
			href={url}
			target="_blank"
			className="flex flex-col justify-center gap-4 my-4 overflow-hidden transition-colors border rounded-lg outline-offset-2 group embed bg-gray-950/50 hover:border-brand-shade-3 border-gray-800"
		>
			<span className="sr-only">{url}</span>
			<Suspense fallback={<Loader />}>
				<UrlEmbed url={url} overrideTitle={overrideTitle} />
			</Suspense>
		</Link>
	)
}
