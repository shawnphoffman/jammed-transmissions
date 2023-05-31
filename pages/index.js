import { memo } from 'react'
import { styled } from 'linaria/react'
import Image from 'next/image'

import LinkCard from 'components/LinkCard/LinkCard'
import Ratings from 'components/Ratings/Ratings'
import Reviews from 'components/Reviews/Reviews'
import items from 'config/links'
import Gonk from 'public/images/gonk@3x.png'

const dataUrl = 'https://api.shawn.party/api/jammed-transmissions/reviews'

// Server data fetch
export async function getServerSideProps(context) {
	const res = await fetch(dataUrl)
	const data = await res.json()
	const { rating, ratingsUrl, reviews } = data

	context.res.setHeader('Cache-Control', 'public, s-maxage=6000, stale-while-revalidate=3000')

	return {
		props: {
			appleRating: rating,
			appleRatingUrl: ratingsUrl,
			reviews,
		},
	}
}

const Home = ({ appleRating, appleRatingUrl, reviews }) => {
	return (
		<>
			<Details>
				<Description>TODO: ADD A DESCRIPTION</Description>
				<Ratings appleRating={appleRating} appleRatingUrl={appleRatingUrl} />
			</Details>
			<Row>
				{items.map((item, i) => {
					return (
						<LinkCard
							i={i}
							key={item.title}
							title={item.title}
							subtitle={item.subtitle}
							link={item.href}
							icon={item.icon}
							cover={item.image}
							bg={item.background}
							color={item.color}
							alert={item.alert}
						></LinkCard>
					)
				})}
			</Row>
			<Row>
				<Reviews reviews={reviews} />
			</Row>
			<GonkWrapper>
				<Image src={Gonk} width="150" height="150" alt="" />
			</GonkWrapper>
		</>
	)
}

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
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	transform: translateZ(0px);
`
const Description = styled.div`
	font-size: 18px;
	max-width: 85%;
	line-height: 1.5;

	@media (max-width: ${smallBreakpoint}) {
		font-size: 16px;
	}
`
const GonkWrapper = styled.div`
	margin-top: 24px;
	text-align: center;
	overflow: hidden;
	height: 100px;
	transform: translateZ(0px);
`

export default memo(Home)
