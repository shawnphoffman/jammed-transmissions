import { type IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Loading() {
	return (
		<div className="text-4xl text-white">
			<FontAwesomeIcon icon={'fa-solid fa-space-station-moon-construction' as IconProp} beatFade />
		</div>
	)
}
