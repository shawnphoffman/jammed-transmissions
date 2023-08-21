'use client'

import { memo, useCallback, useMemo, useState } from 'react'
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

const Episodes = ({ episodes }) => {
	const [search, setSearch] = useState()

	const fuse = useMemo(() => {
		return new Fuse(episodes, fuseOptions)
	}, [episodes])

	const handleSearch = useCallback(e => {
		const value = e.target.value
		setSearch(value)
	}, [])

	const filteredEpisodes = useMemo(() => {
		const ep = search?.length > 2 ? fuse.search(search).map(e => e.item) : episodes
		console.log(ep.length)
		return ep
	}, [search, fuse, episodes])

	if (!filteredEpisodes) return null

	return (
		<>
			<div>{search}</div>
			<input className={styles.input} type="text" onChange={handleSearch} value={search || ''} />
			<div className={styles.episodesContainer}>
				{filteredEpisodes?.length === 0 && <div>No episodes found</div>}
				{filteredEpisodes?.map(ep => (
					<Episode key={ep.guid} episode={ep} />
				))}
			</div>
		</>
	)
}

export default memo(Episodes)
