import 'server-only'

import { type PortableTextBlock, type QueryParams } from 'next-sanity'

import sanityClient from '@/sanity/sanity.client'
import { AWARDS_QUERY, BANNER_QUERY, postBySlugQuery, postsListQuery, postSlugsQuery } from '@/sanity/sanity.queries'
import { AWARDS_QUERYResult } from '@/sanity/sanity.types'
import { type Post } from '@/sanity/sanity.types-old'

export type SiteBanner = {
	heading?: string
	notes?: PortableTextBlock[]
	url?: string
	level?: 'info' | 'priority'
} | null

type SanityFetchProps = {
	query: string
	params?: QueryParams
	tags?: string[]
}

async function sanityFetch<QueryResponse>({ query, params = {}, tags }: SanityFetchProps) {
	return sanityClient.fetch<QueryResponse>(query, params, {
		next: {
			tags,
		},
	})
}

// GET ALL POSTS FOR LIST
export async function getAllPosts(): Promise<Post[]> {
	return await sanityFetch<Post[]>({
		query: postsListQuery,
		tags: ['post'],
	})
}

// GET POST TO VIEW
export async function getPostBySlug(slug: string): Promise<Post> {
	return (
		(await sanityFetch({
			query: postBySlugQuery,
			params: { slug },
			tags: ['post'],
		})) || ({} as any)
	)
}

// GET SLUGS FOR BUILD
export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
	const slugs =
		(await sanityFetch<string[]>({
			query: postSlugsQuery,
			tags: ['post'],
		})) || []
	return slugs.map(slug => ({ slug }))
}

// GET BANNER FOR DISPLAY
export async function getBanner(): Promise<SiteBanner> {
	return await sanityFetch<SiteBanner>({
		query: BANNER_QUERY,
		tags: ['siteBanner'],
	})
}

// GET AWARDS FOR DISPLAY
export async function getAwards(): Promise<AWARDS_QUERYResult> {
	return await sanityFetch<AWARDS_QUERYResult>({
		query: AWARDS_QUERY,
		tags: ['award'],
	})
}
