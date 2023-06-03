import { memo } from 'react'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

import { cardVariants } from 'styles/animations'

const LinkCard = ({ i, link, bg, icon, title, subtitle, color = 'var(--white)' }) => {
	return (
		<SuperContainer initial="hidden" animate="visible" custom={i} variants={cardVariants}>
			<Card whileHover={{ opacity: 1, scale: 1.05 }} whileTap={{ scale: 0.9 }}>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<Cover style={{ background: bg, color: color }}>
						<i className={icon} aria-hidden="true"></i>
						<Data>
							<Title>{title}</Title>
							{!!subtitle && <Subtitle>{subtitle}</Subtitle>}
						</Data>
					</Cover>
				</a>
			</Card>
		</SuperContainer>
	)
}

const SuperContainer = styled(m.div)`
	min-width: 250px;
	flex: 1 1 250px;
	max-width: 350px;
`

const Card = styled(m.div)`
	padding: 8px;
	border-radius: 8px;

	@media (min-width: 750px) {
		margin-bottom: 8px;
	}
`
const Cover = styled.div`
	width: 100%;
	object-fit: cover;
	border-radius: 8px;
	height: 52px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 32px;
	color: var(--white);
`
const Data = styled.div`
	// margin-top: 5px;
	margin-left: 8px;
	text-align: center;
	font-size: 12px;
`
const Title = styled.h2`
	margin: 0;
	font-weight: 700;
`
const Subtitle = styled.p`
	color: var(--white);
	font-weight: bold;
	margin: 0;
`

export default memo(LinkCard)
