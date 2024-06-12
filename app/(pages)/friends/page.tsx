import { Metadata } from 'next'

import friends from '@/app/(pages)/friends/friends'
import FriendCard from '@/components/core/FriendCard'
export const metadata: Metadata = {
	title: 'Friends',
}

export default async function Friends() {
	return (
		<>
			<div className="w-full max-w-3xl text-base leading-normal sm:text-lg">Check out some of our friends</div>
			<div className="flex flex-row flex-wrap justify-center w-full gap-4">
				{friends.map((friend, i) => (
					<FriendCard key={friend.title} title={friend.title} href={friend.href} />
				))}
			</div>
		</>
	)
}
