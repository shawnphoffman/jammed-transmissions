import friends from '@/app/(pages)/friends/friends'
import FriendCard from '@/components/FriendCard'

export default async function Friends() {
	return (
		<>
			<div className="text-base sm:text-lg leading-normal w-full max-w-3xl">Check out some of our friends</div>
			<div className="flex flex-row justify-center flex-wrap w-full gap-4">
				{friends.map((friend, i) => (
					<FriendCard key={friend.title} title={friend.title} href={friend.href} />
				))}
			</div>
		</>
	)
}
