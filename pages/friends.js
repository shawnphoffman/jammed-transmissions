import { memo } from 'react'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

import Gonk from 'components/Gonk/Gonk'
import friends from 'config/friends'
import { cardVariants } from 'styles/animations'
import { PageDescription, PageDetails, PageRow } from 'styles/common'

const Friends = () => {
	return (
		<>
			<PageDetails>
				<PageDescription>Check out these cool podcasts.</PageDescription>
			</PageDetails>

			<PageRow>
				{friends.map((friend, i) => {
					return (
						<FriendCard key={friend.title} initial="hidden" animate="visible" custom={i} variants={cardVariants}>
							<a href={friend.href} target="_blank" rel="noopener noreferrer">
								<Title>{friend.title}</Title>
							</a>
						</FriendCard>
					)
				})}
			</PageRow>
			<Gonk />
		</>
	)
}
const FriendCard = styled(m.div)`
	justify-content: center;
	align-items: center;
	display: flex;
	min-width: 250px;
	flex: 1 1 250px;
	max-width: 350px;
	max-height: 50px;

	margin: 8px;
	background: var(--jt2);

	padding: 8px;
	border-radius: 8px;
	font-weight: bold;

	&:hover {
		background: var(--jt1);
	}
`
const Title = styled.div`
	width: 100%;
	object-fit: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: var(--white);
`

export default memo(Friends)
