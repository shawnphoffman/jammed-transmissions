import 'server-only'

import { type QueryParams } from 'next-sanity'

import sanityClient from '@/sanity/sanity.client'
// TODO Merge this into the same file
import { postBySlugQuery, postsListQuery, postSlugsQuery } from '@/sanity/sanity.queries'
import { type Post } from '@/sanity/sanity.types-old'

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

export async function getAllPosts(): Promise<Post[]> {
	return await sanityFetch<Post[]>({
		query: postsListQuery,
		tags: ['post'],
	})
}

export async function getPostBySlug(slug: string): Promise<Post> {
	return (
		(await sanityFetch({
			query: postBySlugQuery,
			params: { slug },
			tags: ['post'],
		})) || ({} as any)
	)
}

export async function getAllPostsSlugs(): Promise<Pick<Post, 'slug'>[]> {
	const slugs =
		(await sanityFetch<string[]>({
			query: postSlugsQuery,
			tags: ['post'],
		})) || []
	return slugs.map(slug => ({ slug }))
}
