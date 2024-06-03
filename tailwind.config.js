const tailwindColors = require('@shawnphoffman/pod-sites-common/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./sanity/**/*.{js,ts,jsx,tsx,mdx}',
		'./utils/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				brand1: '#ccf',
				brand2: '#99f',
				brand3: '#66f',
				brand4: '#33f',
				brandOrange: '#f66e0d', // links, borders, and review title
				bg1: '#07091a',
				bg2: '#050b3b',
			},
		},
	},
	plugins: [tailwindColors.default],
}
