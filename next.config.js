module.exports = {
	images: {
		remotePatterns: [
			{
				// https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_episode/36237864/36237864-1705966373714-fb092acdfc74a.jpg
				protocol: 'https',
				hostname: 'd3t3ozftmdmh3i.cloudfront.net',
				port: '',
				pathname: '/**',
			},
		],
	},
	async redirects() {
		return [
			{
				source: '/links',
				destination: '/',
				permanent: true,
			},
		]
	},
}
