import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Stars({ count }) {
	const numStars = Number(count)

	let solidStars: any[] = []
	for (let i = 1; i <= numStars; i++) {
		solidStars.push(<FontAwesomeIcon icon={'fa-solid fa-star' as IconProp} key={'star' + i} />)
	}
	let emptyStars: any[] = []
	for (let i = 1; i <= 5 - numStars; i++) {
		emptyStars.push(<FontAwesomeIcon icon={'fa-duotone fa-star' as IconProp} key={'empty' + i} />)
	}

	return (
		<div className="flex text-brand2 flex-nowrap">
			{solidStars}
			{emptyStars}
		</div>
	)
}
