import { memo } from 'react'
import { styled } from 'linaria/react'

import { PageDetails } from 'styles/common'

const Friends = () => {
	return (
		<PageDetails>
			<IFrame
				src="https://open.spotify.com/embed/show/7Cxgn8198cn9rysCF8MWzo?utm_source=generator"
				width="100%"
				height="352"
				frameborder="0"
				allowfullscreen=""
				allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
				sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
				loading="lazy"
			></IFrame>
		</PageDetails>
	)
}

const IFrame = styled.iframe`
	width: 100%;
	max-width: 660px;
	overflow: hidden;
	border-radius: 10px;
	background: transparent;
	border: none;
	border-radius: 12px;
`

export default memo(Friends)
