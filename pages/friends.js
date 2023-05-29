import { memo } from 'react'
import { styled } from 'linaria/react'

import friends from 'config/friends'

//
const Friends = ({}) => {
	return (
		<Details>
			<Description>FRIENDS TBD</Description>
			<Description>Shawn is your friend. He&apos;s the only one you need.</Description>

			{friends.map((friend, i) => {
				return (
					<div
						// i={i}
						key={friend.title}
						// title={friend.title}
						// subtitle={friend.subtitle}
						// link={friend.href}
						// icon={friend.icon}
						// cover={friend.image}
						// bg={friend.background}
						// color={friend.color}
						// alert={friend.alert}
					>
						- {friend.title}
					</div>
				)
			})}
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
