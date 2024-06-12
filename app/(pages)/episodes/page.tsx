import { Metadata } from 'next'

import { getEpisodes } from '@/app/actions'
import Episodes from '@/components/core/Episodes'
export const metadata: Metadata = {
	title: 'Episodes',
}

export default async function EpisodesPage() {
	const data = await getEpisodes()
	return (
		<div className="flex flex-col items-center w-full max-w-screen-lg">
			<Episodes episodes={data.episodes} />
		</div>
	)
}
