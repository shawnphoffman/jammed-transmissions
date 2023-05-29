import { memo } from 'react'
import { styled } from 'linaria/react'

const GenericError = () => {
	return (
		<div>
			<ErrorHeading>Uh-Oh!</ErrorHeading>
			<ErrorDesc>Something went wrong...</ErrorDesc>
			<Icon className="fa-solid fa-skull fa-beat-fade" />
		</div>
	)
}

const ErrorDesc = styled.div`
	margin: 16px;
`
const ErrorHeading = styled.div`
	font-size: 48px;
	font-weight: bold;
`
const Icon = styled.i`
	font-size: 64px;
`
export default memo(GenericError)
