import { Metadata } from 'next/types'

import PostRow from '@/components/updates/PostRow'
import { getAllPosts } from '@/sanity/sanity.requests'
import { POST_QUERYResult } from '@/sanity/sanity.types'

export const metadata: Metadata = {
	title: 'Updates',
}

export default async function UpdatesPage() {
	const posts = await getAllPosts()

	return (
		<div className="w-full max-w-screen-lg mb-8 border rounded-lg border-gray-800 bg-gray-950/50">
			<div className="flex flex-col justify-center w-full p-2 divide-y divide-gray-800">
				{posts.length === 0 && <div className="my-4 text-2xl font-bold text-center text-brand-shade-1">No posts found</div>}
				{posts.map(post => {
					return <PostRow key={post._id} post={post as NonNullable<POST_QUERYResult>} />
				})}
			</div>
		</div>
	)
}
