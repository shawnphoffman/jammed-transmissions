'use client'

import Linkify from 'react-linkify'

export default function EpisodeSummary({ summary }) {
	return <Linkify>{summary}</Linkify>
}
