import { Suspense } from 'react'

import Awards from '@/components/core/AwardsScrape'
import LinkCard from '@/components/core/LinkCard'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsGoodpods from '@/components/core/RatingsGoodpods'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/core/Reviews'

import items from './links'

export default async function Links() {
	return (
		<>
			<div className="w-full max-w-3xl text-base leading-normal sm:text-lg">
				A positive, listener interactive Star Wars podcast since 2018
			</div>
			<div className="flex flex-row flex-wrap items-center justify-center gap-2">
				<Suspense>
					<RatingsApple />
					<RatingsGoodpods />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className="flex flex-row flex-wrap justify-center w-full gap-4">
				{items.map(item => {
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

			<Suspense>
				<Awards />
			</Suspense>

			<div className="flex flex-row flex-wrap justify-center w-full gap-4">
				<Suspense>
					<Reviews />
				</Suspense>
			</div>
		</>
	)
}
