import { memo } from 'react'
import { styled } from 'linaria/react'

import LogoSvg from 'components/Header/jt2.svg'

const Header = () => {
	return (
		<Container>
			<LogoSvg title="Jammed Transmissions" />
		</Container>
	)
}
const Container = styled.div`
	margin: 24px 48px;
	max-width: 400px;
	width: 100%;
	transition: all 200ms linear;
	will-change: scale;
	filter: drop-shadow(5px 5px 3px var(--jt1));

	&:hover {
		transform: scale(1.02);
	}

	@media (max-width: 600px) {
		margin: 16px 48px;
	}
`

export default memo(Header)
