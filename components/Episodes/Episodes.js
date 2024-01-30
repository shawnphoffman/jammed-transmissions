'use client'

import { memo, startTransition, Suspense, useCallback, useDeferredValue, useEffect, useMemo, useState } from 'react'
import Fuse from 'fuse.js'

import Episode from './Episode'
import styles from './Episodes.module.css'

const fuseOptions = {
	includeScore: true,
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

const EpisodeList = memo(
	({ episodes }) => {
		if (episodes.length === 0) return <div>No episodes found...</div>

		return episodes.map(ep => <Episode episode={ep} key={ep.guid} />)
	},
	(prev, next) => prev.episodes.length === next.episodes.length
)
EpisodeList.displayName = 'EpisodeList'

export default function Episodes({ episodes }) {
	const [search, setSearch] = useState('')
	const deferredSearch = useDeferredValue(search)
	const [results, setResults] = useState([])

	const handleSearch = useCallback(e => {
		e.preventDefault()
		const value = e.target.value
		startTransition(() => setSearch(value))
	}, [])

	const fuse = useMemo(() => {
		return new Fuse(episodes, fuseOptions)
	}, [episodes])

	useEffect(() => {
		if (deferredSearch.length >= 3) {
			const filtered = fuse.search(deferredSearch, { limit: 20 }).map(e => e.item)
			startTransition(() => setResults(filtered))
		}
	}, [episodes, fuse, deferredSearch])

	return (
		<>
			<input className={styles.input} type="text" placeholder="Search" onChange={handleSearch} />
			<div className="episodesContainer">
				<Suspense>
					<EpisodeList episodes={deferredSearch.length < 3 ? episodes : results} />
				</Suspense>
			</div>
		</>
	)
}
