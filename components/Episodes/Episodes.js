'use client'

import { memo, useCallback, useEffect, useMemo, useState, useTransition } from 'react'
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
	const [_, startTransition] = useTransition()
	const [search, setSearch] = useState('')
	const [results, setResults] = useState([])

	const handleSearch = useCallback(e => {
		const value = e.target.value
		startTransition(() => setSearch(value))
	}, [])

	const fuse = useMemo(() => {
		return new Fuse(episodes, fuseOptions)
	}, [episodes])

	useEffect(() => {
		if (search.length >= 3) {
			const filtered = fuse.search(search, { limit: 20 }).map(e => e.item)
			startTransition(() => setResults(filtered))
		}
	}, [episodes, fuse, search])

	return (
		<>
			<input className={styles.input} type="text" placeholder="Search" onChange={handleSearch} />
			<div className={styles.episodesContainer}>
				{(!search || search.length < 3) && episodes.map(ep => <Episode episode={ep} key={ep.guid} />)}
				{results.map(ep => (
					<Episode episode={ep} key={ep.guid} />
				))}
			</div>
		</>
	)
}

export default memo(Episodes)
