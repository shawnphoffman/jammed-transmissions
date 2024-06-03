import { Suspense } from 'react'

import LinkCard from '@/components/core/LinkCard'
import RatingsApple from '@/components/RatingsApple'
import RatingsSpotify from '@/components/RatingsSpotify'
import Reviews from '@/components/Reviews'

import items from './links'

export default async function Links() {
	return (
		<>
			<div className={'pageDescription'}>A positive, listener interactive Star Wars podcast since 2018</div>
			<div className="ratingsWrapper">
				<Suspense>
					<RatingsApple />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className={'pageRow'}>
				{items.map((item, i) => {
					return (
						<LinkCard
							key={item.title}
							title={item.title}
							link={item.href}
							icon={item.icon}
							bg={item.background}
							color={item.color}
						></LinkCard>
					)
				})}
			</div>
			<div className={'pageRow'}>
				<Suspense>
					<Reviews />
				</Suspense>
			</div>
		</>
	)
}
