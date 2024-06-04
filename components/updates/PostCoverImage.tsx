import Image from 'next/image'

import { urlForSanityImage } from '@/sanity/sanity.image'

interface CoverImageProps {
	title: string
	slug?: string
	image: any
	priority?: boolean
}

export default function PostCoverImage(props: CoverImageProps) {
	const { image, priority } = props

	if (!image) return null

	return (
		<Image
			className="w-full h-auto rounded-xl"
			width={2000}
			height={1000}
			alt={image.alt || ''}
			src={urlForSanityImage(image).width(1792).height(1000).url()}
			sizes="100vw"
			priority={priority}
		/>
	)
}
