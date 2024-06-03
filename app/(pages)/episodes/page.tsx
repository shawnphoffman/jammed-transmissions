import { getEpisodes } from '@/app/actions'
import Episodes from '@/components/core/Episodes'

export default async function EpisodesPage() {
	const data = await getEpisodes()
	return (
		<div className="flex flex-col items-center max-w-screen-lg w-full">
			<Episodes episodes={data.episodes} />
		</div>
	)
}
