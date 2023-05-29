import { memo } from 'react'
import { styled } from 'linaria/react'

import LogoSvg from 'components/jt.svg'

const Header = () => {
	return (
		<Container>
			<LogoSvg title="Jammed Transmissions" />
		</Container>
	)
}
const Container = styled.div`
	margin: 24px 48px;
	color: var(--jt3);
	max-width: 400px;
	width: 100%;
	transition: filter 200ms linear;
	will-change: filter;
	filter: drop-shadow(1px 1px 4px #000000);

	&:hover {
		filter: drop-shadow(5px 5px 3px #000000);
	}

	@media (max-width: 600px) {
		margin: 16px 48px;
	}
`

export default memo(Header)
