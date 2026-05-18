
const podSitesColors = {
	amazonmusic: '#0077c1',
	applepodcasts: '#872ec4',
	bluesky: '#0560ff',
	castbox: '#db3c0e',
	discord: '#5865F2',
	email: '#52565e',
	etsy: '#f56400',
	facebook: '#0866ff',
	goodpods: '#fcdb00',
	googlepodcasts: '#206ff2',
	iheart: '#c6002b',
	instagram: '#c13584',
	overcast: '#be5a01',
	patreon: '#d93b26',
	pocketcasts: '#ea150d',
	podbean: '#5f7e1b',
	radiopublic: '#ce262f',
	rss: '#ce4a0c',
	spotify: '#16883e',
	teepublic: '#374ecd',
	threads: '#222',
	tiktok: '#eb004a',
	twitch: '#9146ff',
	twitter: '#0d7ac4',
	youtube: '#ee0000',
	zencastr: '#1474e0',
}


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
				...podSitesColors,
				brand: {
					shade: {
						1: '#ccf',
						2: '#99f',
						3: '#66f',
					},
					orange: '#f8ee57',
					background: {
						// dark: '#07091a',
						// light: '#050b3b',
						dark: '#000',
						// light: '#07091a',
						// light: '#10143C',
						light: 'hsl(234, 58, 10)',
					},
				},
			},
		},
	},
	plugins: [],
}
