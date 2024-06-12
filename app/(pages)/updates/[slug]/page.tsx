import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import { siteTitle } from '@/app/meta'
import PostAuthor from '@/components/updates/PostAuthor'
import PostBody from '@/components/updates/PostBody'
import PostCoverImage from '@/components/updates/PostCoverImage'
import PostTitle from '@/components/updates/PostTitle'
import { urlForSanityImage } from '@/sanity/sanity.image'
import { getAllPostsSlugs, getPostBySlug } from '@/sanity/sanity.requests'

type PageProps = {
	params: {
		slug: string
	}
}

export default async function PostPage({ params }: PageProps) {
	const post = await getPostBySlug(params?.slug || '')

	// console.log(post)

	if (!post) {
		return notFound()
	}

	const { title, body = {}, mainImage, slug } = post

	return (
		<div className="flex flex-col items-center justify-center w-full gap-4">
			<PostTitle>{title}</PostTitle>

			<PostAuthor name={post.author?.name} image={post.author?.image} />

			<PostCoverImage title={title} image={mainImage} priority />

			<article className="w-full pb-4 text-left rounded-lg bg-slate-950/75">
				<PostBody content={body} />
			</article>
		</div>
	)
}

export async function generateStaticParams() {
	const slugs = await getAllPostsSlugs()
	return slugs
}

export async function generateMetadata({ params }: PageProps, parent: ResolvingMetadata): Promise<Metadata> {
	const post = await getPostBySlug(params?.slug || '')
	if (!post) return {}

	const previousImages = (await parent).openGraph?.images || []

	const mainImage = post.mainImage ? urlForSanityImage(post.mainImage).height(630).width(1200).url() : undefined

	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: mainImage ? [mainImage] : previousImages,
			url: `/updates/${post.slug}`,
			type: 'article',
			publishedTime: post.publishedAt,
			authors: [post.author?.name!, siteTitle],
		},
	}
}
