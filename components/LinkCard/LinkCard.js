import { memo } from 'react'
import { m } from 'framer-motion'
import { styled } from 'linaria/react'

const variants = {
	visible: i => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.02,
			duration: 0.2,
			ease: 'easeIn',
			type: 'spring',
			stiffness: 200,
			mass: 0.65,
		},
	}),
	hidden: { opacity: 0, y: 100 },
}

const LinkCard = ({ i, link, bg, icon, title, subtitle, color = 'var(--white)' }) => {
	return (
		<SuperContainer initial="hidden" animate="visible" custom={i} variants={variants}>
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
	flex: 1 1 300px;
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
	height: 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 36px;
	color: var(--white);
`
const Data = styled.div`
	// margin-top: 5px;
	margin-left: 6px;
	text-align: center;
	font-size: 16px;
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
