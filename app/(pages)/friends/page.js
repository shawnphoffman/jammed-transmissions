import friends from 'app/(pages)/friends/friends'
import FriendCard from 'components/FriendCard'

export default async function Friends() {
	return (
		<>
			<div className={'pageDescription'}>Check out some of our friends</div>
			<div className={'pageRow'}>
				{friends.map((friend, i) => (
					<FriendCard key={friend.title} title={friend.title} href={friend.href} />
				))}
			</div>
		</>
	)
}
