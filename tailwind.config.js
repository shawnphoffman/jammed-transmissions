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
				logo3: '#ccf',
				logo4: '#99f',
				jt2: '#092043', // friendCardBackground
				jt3: '#f66e0d', // links, borders, and review title
				bg1: '#07091a',
				bg2: '#050b3b',
			},
		},
	},
	plugins: [tailwindColors.default],
}

/*
	--jt1: #1e1e51;
	--jt2: #092043;
	--jt3: #f66e0d;
	--jt4: #747980;

	--logo7: blue;
	--logo6: #33f;
	--logo5: #66f;
	--logo4: #99f;
	--logo3: #ccf;
	--logo2: #f0f0ff;

	--logo: var(--logo3);
*/
