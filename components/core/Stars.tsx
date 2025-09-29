import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faStar as faStarDuo } from '@awesome.me/kit-d7ccc5bb1a/icons/duotone/solid'

export default function Stars({ count }) {
	const numStars = Number(count)

	let solidStars: any[] = []
	for (let i = 1; i <= numStars; i++) {
		solidStars.push(<FontAwesomeIcon icon={faStar} key={'star' + i} />)
	}
	let emptyStars: any[] = []
	for (let i = 1; i <= 5 - numStars; i++) {
		emptyStars.push(<FontAwesomeIcon icon={faStarDuo} key={'empty' + i} />)
	}

	return (
		<div className="flex text-yellow-300 flex-nowrap">
			{solidStars}
			{emptyStars}
		</div>
	)
}
