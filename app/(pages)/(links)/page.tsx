import { Suspense } from 'react'

import LinkCard from '@/components/core/LinkCard'
import RatingsApple from '@/components/core/RatingsApple'
import RatingsSpotify from '@/components/core/RatingsSpotify'
import Reviews from '@/components/core/Reviews'

import items from './links'

export default async function Links() {
	return (
		<>
			<div className="text-base sm:text-lg leading-normal w-full max-w-3xl">
				A positive, listener interactive Star Wars podcast since 2018
			</div>
			<div className="flex flex-row items-center gap-2 flex-wrap justify-center">
				<Suspense>
					<RatingsApple />
					<RatingsSpotify />
				</Suspense>
			</div>
			<div className="flex flex-row justify-center flex-wrap w-full gap-4">
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
			<div className="flex flex-row justify-center flex-wrap w-full gap-4">
				<Suspense>
					<Reviews />
				</Suspense>
			</div>
		</>
	)
}
