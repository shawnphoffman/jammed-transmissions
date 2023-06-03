import { memo } from 'react'
import { styled } from 'linaria/react'
import Image from 'next/image'

import GonkImg from 'public/images/gonk@3x.png'

const Gonk = () => {
	return (
		<GonkWrapper>
			<Image src={GonkImg} width="150" height="150" alt="" />
		</GonkWrapper>
	)
}

const GonkWrapper = styled.div`
	margin-top: 24px;
	text-align: center;
	overflow: hidden;
	height: 100px;
	transform: translateZ(0px);
`

export default memo(Gonk)
