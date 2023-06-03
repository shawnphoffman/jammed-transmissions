export const cardVariants = {
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
