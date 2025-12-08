import Image from 'next/image'
import Link from 'next/link'

import { goodpodsUrl } from '@/app/(pages)/(links)/links'

type Award = {
	// TODO - Add "name"
	imageHeight: number
	imageWidth: number
	frequency: string
	linkUrl: string
	imageUrl: string
	category: string
}

type AwardsResponse = {
	awards: Award[]
	url: string
}

export async function getAwards() {
	try {
		const res = await fetch(`https://api.shawn.party/api/pod-data/goodpods-scrape?url=${goodpodsUrl}`, {
			next: { revalidate: 3600 },
			// next: { revalidate: 360 },
		})
		const data: AwardsResponse = await res.json()
		const { awards } = data

		// console.log('getAwards', awards)

		return awards
	} catch (e) {
		console.error(e)
		return []
	}
}

export default async function Awards() {
	let awards: Award[] = []

	try {
		awards = await getAwards()
	} catch (e) {
		console.error(e)
		return null
	}

	// console.log('Awards.awards', awards)

	if (!awards || !awards.length) {
		return null
	}

	return (
		<div className="flex flex-row flex-wrap justify-center flex-1 gap-2 gap-y-0.5 items-center">
			{awards.map(award =>
				award.linkUrl ? (
					<Link
						title="Goodpods Award"
						key={award.linkUrl}
						href={award.linkUrl}
						target="_blank"
						className={`flex flex-col items-center`} /*aria-label={award.name}*/
					>
						<Image src={award.imageUrl} alt="" width={award.imageWidth} height={award.imageHeight} />
					</Link>
				) : (
					<div key={award.linkUrl} className={`flex flex-col items-center`}>
						<Image src={award.imageUrl} alt="" width={award.imageWidth} height={award.imageHeight} />
					</div>
				)
			)}
		</div>
	)
}
