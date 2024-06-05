'use client'

import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import classnames from 'classnames'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'

import sanityClient from '@/sanity/sanity.client'

interface PostImageProps {
	asset: SanityImageSource
	alt: string
	caption?: string
	className?: string
}

const PostImage = (props: PostImageProps) => {
	const { asset, alt, caption } = props

	const imageProps = useNextSanityImage(sanityClient, asset)

	if (!imageProps) return null

	return (
		<figure className="flex flex-col items-center justify-center">
			<Image
				alt={alt}
				//
				sizes="(max-width: 800px) 100vw, 800px"
				className={classnames('mw-full h-auto', props.className)}
				{...imageProps}
			/>
			{caption && (
				<figcaption className="mt-2 text-sm italic text-center text-slate-400 text-pretty">
					{/*  */}
					{caption}
				</figcaption>
			)}
		</figure>
	)
}

export default PostImage
