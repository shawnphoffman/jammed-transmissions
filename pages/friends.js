import { memo } from 'react'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

import friends from 'config/friends'

// TODO Consolidate with LinkCard
const variants = {
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.02,
			duration: 0.2,
			ease: 'easeIn',
			type: 'spring',
			stiffness: 200,
			mass: 0.65,
		},
	}),
	hidden: { opacity: 0, y: 100 },
}

const Friends = () => {
	return (
		<Details>
			<Description>Check out these cool podcasts.</Description>
			<Description>TODO: Put something better here.</Description>
			<Row>
				{friends.map((friend, i) => {
					return (
						<FriendCard key={friend.title} initial="hidden" animate="visible" custom={i} variants={variants}>
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
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	transform: translateZ(0px);
	max-width: 680px;
`
const FriendCard = styled(m.div)`
	min-width: 250px;
	flex: 1 1 250px;
	max-width: 350px;

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
	font-size: 18px;
	color: var(--white);
`

export default memo(Friends)
