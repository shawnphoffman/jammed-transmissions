import { memo } from 'react'
import { styled } from 'linaria/react'

const Loading = () => (
	<Details>
		<Loader className="fa-solid fa-space-station-moon-construction fa-beat-fade" />
	</Details>
)
const smallBreakpoint = '420px'
const Details = styled.div`
	text-align: center;
	margin-bottom: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: ${smallBreakpoint}) {
		margin-bottom: 16px;
	}
`
const Loader = styled.i`
	font-size: 64px;
`
export default memo(Loading)
