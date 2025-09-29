export const spotifyId = '7Cxgn8198cn9rysCF8MWzo'
export const spotifyUrl = `https://open.spotify.com/show/${spotifyId}`
export const applePodcastId = '1445333816'
export const applePodcastUrl = `https://podcasts.apple.com/us/podcast/id${applePodcastId}`
export const appleRatingUrl = `${applePodcastUrl}?see-all=reviews`
export const rssFeedUrl = 'https://anchor.fm/s/d8972e20/podcast/rss'
export const goodpodsUrl = 'https://goodpods.com/podcasts/jammed-transmissions-a-star-wars-podcast-222540'

type LinkItem = {
	title: string
	href: string
	icon: string
	background: string
	color?: string
}

const items: LinkItem[] = [
	{
		title: 'Spotify',
		href: 'https://open.spotify.com/show/7Cxgn8198cn9rysCF8MWzo',
		icon: 'fa-brands fa-spotify',
		background: 'bg-spotify',
	},
	{
		title: 'Apple Podcasts',
		href: 'https://podcasts.apple.com/us/podcast/jammed-transmissions-a-star-wars-podcast/id1445333816?itsct=podcast_box&itscg=30200&ls=1',
		icon: 'fa-solid fa-podcast',
		background: 'bg-applepodcasts',
	},
	{
		title: 'Emails',
		href: 'mailto:comlink@jammedtransmissions.com',
		icon: 'fa-solid fa-at',
		background: 'bg-email',
	},
	{
		title: 'TeePublic',
		href: 'https://www.teepublic.com/user/jammed-transmissions',
		icon: 'fak fa-teepublic',
		background: 'bg-teepublic',
	},
	{
		title: 'Bluesky',
		href: 'https://bsky.app/profile/cadbanesbounty.bsky.social',
		icon: 'fa-brands fa-bluesky',
		background: 'bg-bluesky',
	},
	{
		title: 'Overcast',
		href: 'https://overcast.fm/p4094075-GKfo0m',
		icon: 'fak fa-overcast fa-lg',
		background: 'bg-overcast',
	},
	{
		title: 'Goodpods',
		href: goodpodsUrl,
		icon: 'fak fa-goodpods',
		background: 'bg-goodpods',
		color: 'text-black',
	},
	{
		title: 'Amazon Music',
		href: 'https://music.amazon.com/podcasts/79e0b4ef-8009-42a6-9109-c40827194123jammed-transmissions-a-star-wars-podcast',
		icon: 'fa-brands fa-amazon',
		background: 'bg-amazonmusic',
	},
	{
		title: 'RSS',
		href: 'https://anchor.fm/s/d8972e20/podcast/rss',
		icon: 'fa-solid fa-square-rss',
		background: 'bg-rss',
	},
	// {
	// 	title: 'iHeart',
	// 	href: 'https://www.iheart.com/podcast/338-jammed-transmissions-a-sta-102467606/',
	// 	icon: 'fak fa-iheart',
	// 	background: 'bg-iheart',
	// },
	// {
	// 	title: 'Pocket Casts',
	// 	href: 'https://pca.st/j125cwks',
	// 	icon: 'fak fa-pocket-casts',
	// 	background: 'bg-pocketcasts',
	// },
	// {
	// 	title: 'Radio Public',
	// 	href: 'https://radiopublic.com/jammed-transmissions-a-star-wars-Wwogwa',
	// 	icon: 'fak fa-radio-public',
	// 	background: 'bg-radiopublic',
	// },
	// {
	// 	title: 'Castbox',
	// 	href: 'https://castbox.fm/podcasts/Jammed%20Transmissions:%20A%20Star%20Wars%20Podcast',
	// 	icon: 'fak fa-castbox',
	// 	background: 'bg-castbox',
	// },
] as const

export default items
