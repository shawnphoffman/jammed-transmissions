import { memo } from 'react'
import Link from 'next/link'

const NotFound = () => {
	return (
		<div>
			<h2>Not Found</h2>
			<p>
				<Link href="/">Go home</Link>
			</p>
		</div>
	)
}

export default memo(NotFound)
