'use client'

import { useState } from 'react'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import classnames from 'classnames'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import Lightbox from 'yet-another-react-lightbox'

import sanityClient from '@/sanity/sanity.client'

interface PostImageProps {
	asset: SanityImageSource
	caption?: string
	className?: string
}

const PostImage = (props: PostImageProps) => {
	const { asset, caption } = props
	const [open, setOpen] = useState(false)

	const imageProps = useNextSanityImage(sanityClient, asset)

	if (!imageProps) return null

	return (
		<figure className="flex flex-col items-center justify-center">
			<Image
				alt={''}
				sizes="(max-width: 800px) 100vw, 800px"
				className={classnames(
					'mw-full h-auto max-h-96 aspect-auto w-auto mx-auto hover:cursor-pointer hover:outline outline-brand3 outline-offset-2',
					props.className
				)}
				onClick={() => setOpen(true)}
				{...imageProps}
			/>
			{caption && (
				<figcaption className="mt-2 text-sm italic text-center text-slate-400 text-pretty">
					{/*  */}
					{caption}
				</figcaption>
			)}
			<Lightbox
				open={open}
				close={() => setOpen(false)}
				slides={[imageProps]}
				carousel={{
					preload: 2,
					imageFit: 'contain',
				}}
				controller={{ closeOnBackdropClick: true }}
				animation={{ fade: 250 }}
				render={{
					buttonPrev: () => null,
					buttonNext: () => null,
				}}
			/>
		</figure>
	)
}

export default PostImage
