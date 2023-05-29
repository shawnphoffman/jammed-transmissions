import { memo } from 'react'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

const variants = {
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: 'easeIn',
			type: 'spring',
			stiffness: 50,
		},
	}),
	hidden: { opacity: 0, y: 200 },
}

const LinkCard = ({ i, link, bg, icon, title, subtitle, color = 'var(--white)' }) => {
	return (
		<SuperContainer initial="hidden" animate="visible" custom={i} variants={variants}>
			<Card whileHover={{ opacity: 1, scale: 1.05, skewY: -2 }} whileTap={{ scale: 0.9 }}>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<Cover style={{ background: bg, color: color }}>
						<i className={icon} aria-hidden="true"></i>
					</Cover>
					<Data>
						<Title>{title}</Title>
						{!!subtitle && <Subtitle>{subtitle}</Subtitle>}
					</Data>
				</a>
			</Card>
		</SuperContainer>
	)
}

const SuperContainer = styled(m.div)`
	min-width: 250px;
	flex: 1 1 300px;
	max-width: 350px;
`

const Card = styled(m.div)`
	padding: 8px;
	border-radius: 8px;
	min-height: 155px;

	@media (min-width: 750px) {
		margin-bottom: 8px;
	}
`
const Cover = styled.div`
	width: 100%;
	object-fit: cover;
	border-radius: 8px;
	height: 94px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 48px;
	color: var(--white);
`
const Data = styled.div`
	margin-top: 5px;
	text-align: center;
`
const Title = styled.h2`
	margin: 0;
	font-weight: 700;
`
const Subtitle = styled.p`
	color: var(--linkAlt);
	margin: 0 0 8px 0;
`

export default memo(LinkCard)
