import Image from 'next/image'

import EpisodeSummary from './EpisodeSummary'
import Link from 'next/link'

const options = { year: 'numeric', month: 'long', day: 'numeric' } as const

export default function Episodes({ episode }) {
	const pubDate = new Date(episode.pubDate).toLocaleDateString('en-US', options)
	return (
		<div className="flex flex-col justify-start w-full p-4 text-sm text-left rounded-lg border border-brand1 mt-2 bg-slate-950/50">
			<h2 className="mb-2 text-2xl font-bold text-center text-white md:mb-4">{episode.title}</h2>
			<div className="flex flex-col items-center justify-start gap-4 md:flex-row md:items-start">
				<Image src={episode.imgSrc} alt={episode.title} className="w-32 md:w-48 h-fit aspect-square rounded-2xl" width={192} height={192} />
				<div className="flex flex-col self-stretch overflow-hidden whitespace-break-spaces text-wrap text-ellipsis">
					<div className="mb-2 text-xs italic text-brandOrange">Posted: {pubDate}</div>
					<div className="[&_a]:text-brand2 [&_a]:px-0.5 mb-1 [&_a]:pb-0.5 [&_a]:font-medium [&_a:hover]:text-brand1 [&_a]:break-words text-sm">
						<EpisodeSummary summary={episode.summary} />
					</div>
					<div className="flex items-end flex-1">
						<Link className="inline-block text-base font-bold text-brand2 hover:text-brand1" target="_blank" href={episode.link}>
							Episode Link
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}