import { memo } from 'react'
import { styled } from 'linaria/react'

import ActiveLink from 'components/ActiveLink/ActiveLink'

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 8px;
`

const StyledLink = styled.div`
	margin: 0 8px;
	margin-bottom: 16px;
	font-weight: bold;
	white-space: nowrap;
	cursor: pointer;
	&:hover {
		color: var(--orange1) !important;
	}
	&.active {
		border-bottom: 1px solid var(--text);
	}
`

const NavBar = () => {
	return (
		<Container>
			<ActiveLink href="/" activeClassName="active">
				<StyledLink>Home</StyledLink>
			</ActiveLink>
			<ActiveLink href="/friends" activeClassName="active">
				<StyledLink>Friends of JT</StyledLink>
			</ActiveLink>
		</Container>
	)
}

export default memo(NavBar)
