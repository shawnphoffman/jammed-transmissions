'use client'

import Linkify from 'react-linkify'

export default function EpisodeSummary({ summary }) {
	return (
		<Linkify>
			<div dangerouslySetInnerHTML={{ __html: summary }} />
		</Linkify>
	)
}
