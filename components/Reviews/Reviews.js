import { memo, useMemo } from 'react'
import { styled } from 'linaria/react'

const Stars = memo(({ count }) => {
	const numStars = Number(count)

	let solidStars = []
	for (let i = 1; i <= numStars; i++) {
		solidStars.push(<i className="fa-solid fa-star" key={'solid' + i} />)
	}
	let emptyStars = []
	for (let i = 1; i <= 5 - numStars; i++) {
		emptyStars.push(<i className="fa-duotone fa-star" key={'empty' + i} />)
	}

	return (
		<StarContainer>
			{solidStars}
			{emptyStars}
		</StarContainer>
	)
})
Stars.displayName = 'Stars'

const filteredAuthors = ['FatKraken66']

const Reviews = ({ reviews }) => {
	const filteredReviews = useMemo(() => {
		if (!reviews) return null

		return reviews.reduce((memo, acc) => {
			if (filteredAuthors.includes(acc.author)) {
				return memo
			}
			if (acc.stars !== '5') {
				return memo
			}
			memo.push(acc)
			return memo
		}, [])
	}, [reviews])

	if (!filteredReviews) return null

	return (
		<>
			<Heading>Recent Reviews</Heading>
			{filteredReviews.map(r => (
				<Container key={r.title}>
					<Header>
						<Byline>
							<Title>&quot;{r.title}&quot;</Title>
							<Author>{r.author}</Author>
						</Byline>
						<Stars count={r.stars} />
					</Header>
					<Text>{r.text}</Text>
				</Container>
			))}
		</>
	)
}
const smallBreakpoint = '600px'
const Container = styled.div`
	padding: 8px;
	/* border-top: 1px solid var(--outline); */
	justify-content: flex-start;
	display: flex;
	flex-direction: column;
	text-align: left;
	font-size: 14px;
	width: 100%;
`
const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
const Byline = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	@media (max-width: ${smallBreakpoint}) {
		align-items: flex-start;
		flex-direction: column;
	}
`
const Author = styled.div`
	font-size: 12px;
	margin-left: 16px;
	margin-right: 16px;
	font-style: italic;
	color: var(--logo);
	@media (max-width: ${smallBreakpoint}) {
		margin-left: 8px;
		margin-top: 8px;
	}
`
const Heading = styled.div`
	font-weight: bold;
	font-size: 18px;
	margin-top: 16px;
	margin-bottom: 4px;
`
const Title = styled.div`
	font-weight: bold;
	color: var(--jt3);
`
const Text = styled.div`
	font-size: 12px;
	line-height: 1.5;
	padding: 8px;
`
const StarContainer = styled.div`
	color: var(--yellow);
	display: flex;
	flex-wrap: nowrap;
`

export default memo(Reviews)
