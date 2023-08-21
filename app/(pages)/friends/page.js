import { memo } from 'react'

import styles from 'app/Global.module.css'
import FriendCard from 'components/FriendCard/FriendCard'
import friends from 'config/friends'

const Friends = ({}) => {
	return (
		<>
			<div className={styles.pageDescription}>Check out some of our friends</div>

			<div className={styles.pageRow}>
				{friends.map((friend, i) => (
					<FriendCard key={friend.title} title={friend.title} href={friend.href} />
				))}
			</div>
		</>
	)
}

export default memo(Friends)
