import { memo } from 'react'
import { styled } from 'linaria/react'

const Ratings = props => {
	if (!props || !props.appleRating) return null

	return (
		<Container href={props.appleRatingUrl || ''} target="_blank" rel="noopener noreferrer">
			<Value>{props.appleRating}</Value>
			<Star className="fa-solid fa-star-sharp" title="Stars" />
			<Byline>on Apple Podcasts</Byline>
		</Container>
	)
}

const Container = styled.a`
	padding: 4px 8px;
	margin: 4px;
	background: var(--applePodcasts);
	color: var(--white);
	font-weight: bold;
	border-radius: 8px;
	font-size: 0.8rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	white-space: nowrap;
`
const Value = styled.div``
const Star = styled.i`
	font-size: 0.8em;
	margin-left: 2px;
	margin-right: 4px;
`
const Byline = styled.div``

export default memo(Ratings)
