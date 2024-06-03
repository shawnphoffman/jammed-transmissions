import { getEpisodes } from '@/app/actions'
import Episodes from '@/components/Episodes/Episodes'

export default async function EpisodesPage() {
	const data = await getEpisodes()
	return (
		<div className="flex flex-col items-center max-w-screen-md w-full">
			<Episodes episodes={data.episodes} />
		</div>
	)
}
