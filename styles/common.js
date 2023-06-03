import { styled } from 'linaria/react'

const smallBreakpoint = '420px'

export const PageDetails = styled.div`
	text-align: center;
	margin-bottom: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`

export const PageDescription = styled.div`
	font-size: 18px;
	max-width: 85%;
	line-height: 1.5;
	margin-bottom: 8px;

	@media (max-width: ${smallBreakpoint}) {
		font-size: 16px;
	}
`

export const PageRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	transform: translateZ(0px);
	flex: 1;
	// max-width: 680px;
`
