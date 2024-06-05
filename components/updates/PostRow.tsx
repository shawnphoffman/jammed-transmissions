import Image from 'next/image'

import { urlForSanityImage } from '@/sanity/sanity.image'
import { POST_QUERYResult } from '@/sanity/sanity.types'

import PostAuthor from './PostAuthor'
import PostAuthorAvatar from './PostAuthorAvatar'
import PostDate from './PostDate'

type Props = {
	post: NonNullable<POST_QUERYResult>
}

export default function PostRow({ post }: Props) {
	const { author, mainImage, publishedAt, slug, title } = post
	return (
		<a href={`/updates/${slug}`} className="w-full mx-auto text-left text-white md:w-full group max-md:max-w-96 hover:bg-slate-900">
			<div className="flex flex-col items-center justify-between gap-2 px-0 py-4 transition-all rounded-lg md:py-2 md:px-4 md:flex-row md:gap-4">
				{mainImage && (
					<Image
						className="h-auto rounded w-96 md:w-24"
						width={400}
						height={200}
						alt={''}
						src={urlForSanityImage(mainImage).height(200).width(400).url()}
						sizes="100vw"
					/>
				)}
				<div className="flex flex-row w-full gap-2">
					<div className="flex items-center justify-center md:hidden">
						<PostAuthorAvatar name={author?.name} image={author?.image} />
					</div>
					<div className="flex flex-col items-start justify-center flex-1 w-full gap-1">
						<span className="text-xl font-bold leading-tight transition-colors group-hover:text-brand-shade-1">{title}</span>
						{/* <span className="md:hidden"> */}
						<PostDate dateString={publishedAt} />
						{/* </span> */}
						<span className="text-sm leading-tight text-white/90">{post.excerpt}</span>
					</div>
				</div>
				<div className="hidden md:flex">
					<PostAuthor name={author?.name} image={author?.image} />
				</div>
			</div>
		</a>
	)
}
