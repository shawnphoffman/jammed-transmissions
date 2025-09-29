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
				brand: {
					shade: {
						1: '#ccf',
						2: '#99f',
						3: '#66f',
					},
					orange: '#f66e0d',
					background: {
						// dark: '#07091a',
						// light: '#050b3b',
						dark: '#000',
						light: '#07091a',
					},
				},
			},
		},
	},
	plugins: [tailwindColors.default],
}
