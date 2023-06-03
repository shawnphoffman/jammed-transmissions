import { memo } from 'react'

import Gonk from 'components/Gonk/Gonk'
import LinkCard from 'components/LinkCard/LinkCard'
import Ratings from 'components/Ratings/Ratings'
import Reviews from 'components/Reviews/Reviews'
import items from 'config/links'
import { PageDescription, PageDetails, PageRow } from 'styles/common'

const dataUrl = 'https://api.shawn.party/api/jammed-transmissions/reviews'

// Server data fetch
export async function getServerSideProps(context) {
	try {
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
	} catch {
		return {
			props: {},
		}
	}
}

const Home = ({ appleRating, appleRatingUrl, reviews }) => {
	return (
		<>
			<PageDetails>
				<PageDescription>A positive, listener interactive Star Wars podcast since 2018</PageDescription>
				<Ratings appleRating={appleRating} appleRatingUrl={appleRatingUrl} />
			</PageDetails>
			<PageRow>
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
			</PageRow>
			<PageRow>
				<Reviews reviews={reviews} />
			</PageRow>
			<Gonk />
		</>
	)
}

export default memo(Home)
