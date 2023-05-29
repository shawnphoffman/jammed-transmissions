import { memo } from 'react'
import { styled } from 'linaria/react'

import friends from 'config/friends'

const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	transform: translateZ(0px);
`
const FriendCard = styled.div`
	margin: 8px;
	background: var(--jt2);

	padding: 8px;
	border-radius: 8px;
	font-weight: bold;

	&:hover {
		background: var(--jt1);
	}
`
const Cover = styled.div`
	width: 100%;
	object-fit: cover;
	// height: 94px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24px;
	color: var(--white);
`

//
const Friends = ({}) => {
	return (
		<Details>
			<Description>Check out these cool podcasts.</Description>
			<Row>
				{friends.map(friend => {
					return (
						<FriendCard key={friend.title}>
							<a href={friend.href} target="_blank" rel="noopener noreferrer">
								<Cover>{friend.title}</Cover>
							</a>
						</FriendCard>
					)
				})}
			</Row>
		</Details>
	)
}

// TODO Refactor this to common layout
const smallBreakpoint = '420px'
const Details = styled.div`
	text-align: center;
	margin-bottom: 32px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`
const Description = styled.div`
	font-size: 18px;
	max-width: 85%;
	line-height: 1.5;

	@media (max-width: ${smallBreakpoint}) {
		font-size: 16px;
	}
`

export default memo(Friends)
