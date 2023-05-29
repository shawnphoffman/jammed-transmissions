import { styled } from 'linaria/react'

const ServerError = () => {
	return (
		<Details>
			<Row>Something broke...</Row>
			<Row>
				<i className="fa-solid fa-bomb fa-beat-fade" />
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
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	/*  */
	font-size: 24px;
	/* font-weight: bold; */
	margin: 16px;
	color: var(--orange1);

	i {
		color: var(--white);
		font-size: 48px;
	}
`
export default ServerError
