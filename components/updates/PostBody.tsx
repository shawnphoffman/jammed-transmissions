import { Suspense } from 'react'
import { PortableText, type PortableTextReactComponents } from '@portabletext/react'
import { PredictionGrid, type Prediction, type PredictionsTheme } from '@shawnphoffman/pod-sites-shared/components'

import { urlForSanityImage } from '@/sanity/sanity.image'

import PostImage from './portableText/PostImage'
import UrlEmbed from './portableText/UrlEmbed'
import YoutubeEmbed from './portableText/YoutubeEmbed'
import styles from './PostBody.module.css'

const predictionsTheme: PredictionsTheme = {
	accentBar: 'bg-brand-shade-2',
	cardTitle: 'text-brand-shade-2',
	summaryTitle: 'text-brand-shade-2',
	winnerRing: 'ring-brand-shade-2/60',
	winnerBg: 'bg-brand-shade-2/10',
	winnerText: 'text-brand-shade-2',
	winnerIcon: 'text-brand-shade-2',
}

function buildComponents(predictions?: Prediction[] | null): Partial<PortableTextReactComponents> {
	return {
	marks: {
		textRed: ({ children }) => {
			return <span className="text-red-400">{children}</span>
		},
		textBlue: ({ children }) => {
			return <span className="text-brand-shade-2">{children}</span>
		},
		textGreen: ({ children }) => {
			return <span className="text-green-400">{children}</span>
		},
	},
	types: {
		image: ({ value }) => {
			return <PostImage {...value} />
		},
		embed: ({ value }) => {
			return <UrlEmbed {...value} />
		},
		youtube: ({ value }) => {
			const { url } = value
			const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+?&v=))([^?&]+)/)
			const videoId = match ? match[1] : null
			return <YoutubeEmbed videoId={videoId} />
		},
		gallery: ({ value }) => {
			return (
				<div className="grid items-center justify-center grid-cols-2 gap-4 md:grid-cols-3">
					{value.images.map(i => (
						<Suspense key={i._key}>
							<PostImage className="h-auto max-w-full rounded-lg" {...i} />
						</Suspense>
					))}
				</div>
			)
		},
		predictionsMarker: () => {
			if (!predictions?.length) return null
			return (
				<div className="my-6 not-prose">
					<PredictionGrid predictions={predictions} theme={predictionsTheme} urlForImage={urlForSanityImage} />
				</div>
			)
		},
	},
}
}

function hasMarker(content: any[] | undefined | null): boolean {
	return Array.isArray(content) && content.some(b => b?._type === 'predictionsMarker')
}

type PostBodyProps = {
	content: any
	predictions?: Prediction[] | null
}

export default function PostBody({ content, predictions }: PostBodyProps) {
	const components = buildComponents(predictions)
	const showAppendedGrid = !hasMarker(content) && Boolean(predictions?.length)
	return (
		<div className={`mx-auto max-w-3xl ${styles.portableText}`}>
			<PortableText value={content} components={components} />
			{showAppendedGrid ? (
				<div className="mt-6 not-prose">
					<PredictionGrid predictions={predictions!} theme={predictionsTheme} urlForImage={urlForSanityImage} />
				</div>
			) : null}
		</div>
	)
}
