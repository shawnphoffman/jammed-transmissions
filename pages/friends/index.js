import { memo } from 'react'
import { styled } from 'linaria/react'

//
const Friends = ({}) => {
	return (
		<Details>
			<Description>FRIENDS TBD</Description>
			<Description>Shawn is your friend. He&apos;s the only one you need.</Description>
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
