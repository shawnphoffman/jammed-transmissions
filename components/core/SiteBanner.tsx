import { PortableText, type PortableTextReactComponents } from '@portabletext/react'
import Link from 'next/link'

import { getBanner } from '@/sanity/sanity.requests'

const bannerPortableTextComponents: Partial<PortableTextReactComponents> = {
	marks: {
		link: ({ children, value }) => (
			<Link href={value?.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-80">
				{children}
			</Link>
		),
	},
}

const levelStyles: Record<string, string> = {
	info: 'bg-brand-background-dark text-white',
	priority: 'bg-red-950 text-white border-white border-b border-dashed',
}

export default async function SiteBanner() {
	const banner = await getBanner()

	if (!banner) return null

	const style = levelStyles[banner.level ?? 'info']

	const content = (
		<div className={`w-full p-1 lg:p-2 text-center flex md:flex-row flex-col items-center justify-center md:gap-2 text-base ${style}`}>
			<div className="font-semibold">{banner.heading}</div>
			<div className="inline-flex flex-row items-center justify-center gap-1 text-sm leading-tight">
				{banner.notes && <PortableText value={banner.notes} components={bannerPortableTextComponents} />}
			</div>
		</div>
	)

	if (banner.url) {
		return (
			<Link href={banner.url} target="_blank" rel="noopener noreferrer" className="block transition-opacity hover:opacity-80">
				{content}
			</Link>
		)
	}

	return content
}
