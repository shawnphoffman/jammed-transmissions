'use client'

import { memo, startTransition, Suspense, useCallback, useDeferredValue, useMemo, useState } from 'react'
import Fuse from 'fuse.js'

import Loading from 'components/Loading'

import Episode from './Episode'
import styles from './Episodes.module.css'

const fuseOptions = {
	includeScore: true,
	useExtendedSearch: true,
	minMatchCharLength: 3,
	keys: [
		{
			name: 'title',
			weight: 0.7,
		},
		{
			name: 'summary',
			weight: 0.3,
		},
	],
}

const EpisodeList = memo(({ episodes }) => {
	if (episodes.length === 0) return <div>No episodes found...</div>

	return episodes.map(ep => <Episode episode={ep} key={ep.guid} />)
})
EpisodeList.displayName = 'EpisodeList'

const Episodes = ({ episodes }) => {
	const [search, setSearch] = useState('')
	const deferredSearch = useDeferredValue(search)

	const handleSearch = useCallback(e => {
		e.preventDefault()
		const value = e.target.value
		startTransition(() => setSearch(value))
	}, [])

	const fuse = useMemo(() => {
		return new Fuse(episodes, fuseOptions)
	}, [episodes])

	const filtered = useMemo(() => {
		if (deferredSearch.length >= 3) {
			const out = fuse.search(`'"${deferredSearch}"`, { limit: 20 }).map(e => e.item)
			return out
		}
		return episodes
	}, [deferredSearch, episodes, fuse])

	return (
		<>
			<input className={`${styles.input} bubbled`} type="text" placeholder="Search" onChange={handleSearch} />
			<div className={`${styles.episodesContainer} bubbled`}>
				<Suspense fallback={<Loading label="episodes" />}>
					<EpisodeList episodes={filtered} />
				</Suspense>
			</div>
		</>
	)
}

export default memo(Episodes)
