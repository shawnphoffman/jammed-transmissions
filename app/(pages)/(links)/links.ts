import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faAmazon, faBluesky, faSpotify } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'
import { faAt, faRssSquare } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { faPodcast } from '@awesome.me/kit-d7ccc5bb1a/icons/duotone/solid'
import { faGoodpods, faOvercast, faTeepublic } from '@awesome.me/kit-d7ccc5bb1a/icons/kit/custom'

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
	icon: IconDefinition
	background: string
	color?: string
}

const items: LinkItem[] = [
	{
		title: 'Spotify',
		href: 'https://open.spotify.com/show/7Cxgn8198cn9rysCF8MWzo',
		icon: faSpotify,
		background: 'bg-spotify',
	},
	{
		title: 'Apple Podcasts',
		href: 'https://podcasts.apple.com/us/podcast/jammed-transmissions-a-star-wars-podcast/id1445333816?itsct=podcast_box&itscg=30200&ls=1',
		icon: faPodcast,
		background: 'bg-applepodcasts',
	},
	{
		title: 'Emails',
		href: 'mailto:comlink@jammedtransmissions.com',
		icon: faAt,
		background: 'bg-email',
	},
	{
		title: 'TeePublic',
		href: 'https://www.teepublic.com/user/jammed-transmissions',
		icon: faTeepublic,
		background: 'bg-teepublic',
	},
	{
		title: 'Bluesky',
		href: 'https://bsky.app/profile/cadbanesbounty.bsky.social',
		icon: faBluesky,
		background: 'bg-bluesky',
	},
	{
		title: 'Overcast',
		href: 'https://overcast.fm/p4094075-GKfo0m',
		icon: faOvercast,
		background: 'bg-overcast',
	},
	{
		title: 'Goodpods',
		href: goodpodsUrl,
		icon: faGoodpods,
		background: 'bg-goodpods',
		color: 'text-black',
	},
	{
		title: 'Amazon Music',
		href: 'https://music.amazon.com/podcasts/79e0b4ef-8009-42a6-9109-c40827194123jammed-transmissions-a-star-wars-podcast',
		icon: faAmazon,
		background: 'bg-amazonmusic',
	},
	{
		title: 'RSS',
		href: 'https://anchor.fm/s/d8972e20/podcast/rss',
		icon: faRssSquare,
		background: 'bg-rss',
	},
	// {
	// 	title: 'iHeart',
	// 	href: 'https://www.iheart.com/podcast/338-jammed-transmissions-a-sta-102467606/',
	// 	icon: faIheart,
	// 	background: 'bg-iheart',
	// },
	// {
	// 	title: 'Pocket Casts',
	// 	href: 'https://pca.st/j125cwks',
	// 	icon: faPocketCasts,
	// 	background: 'bg-pocketcasts',
	// },
	// {
	// 	title: 'Radio Public',
	// 	href: 'https://radiopublic.com/jammed-transmissions-a-star-wars-Wwogwa',
	// 	icon: faRadioPublic,
	// 	background: 'bg-radiopublic',
	// },
	// {
	// 	title: 'Castbox',
	// 	href: 'https://castbox.fm/podcasts/Jammed%20Transmissions:%20A%20Star%20Wars%20Podcast',
	// 	icon: faCastbox,
	// 	background: 'bg-castbox',
	// },
] as const

export default items
