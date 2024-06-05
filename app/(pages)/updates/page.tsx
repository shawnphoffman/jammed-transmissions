import PostRow from '@/components/updates/PostRow'
import { getAllPosts } from '@/sanity/sanity.requests'
import { POST_QUERYResult } from '@/sanity/sanity.types'

export default async function UpdatesPage() {
	const posts = await getAllPosts()

	return (
		<div className="w-full max-w-screen-lg mb-8 border rounded-lg border-brand-shade-1 bg-slate-950/50">
			<div className="flex flex-col justify-center w-full p-2 divide-y divide-brand-shade-1">
				{posts.length === 0 && <div className="text-center text-2xl font-bold text-brand-shade-1 my-4">No posts found</div>}
				{posts.map(post => {
					return <PostRow key={post._id} post={post as NonNullable<POST_QUERYResult>} />
				})}
			</div>
		</div>
	)
}
