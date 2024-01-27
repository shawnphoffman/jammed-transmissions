const items = [
	{
		title: 'Ahch-To Radio',
		href: 'https://podcasts.apple.com/us/podcast/ahch-to-radio-a-star-wars-podcast/id1459562434',
		// type: 'podcast',
	},
	{
		title: 'Bad Motivators',
		href: 'https://podcasters.spotify.com/pod/show/the-bad-motivators',
		// type: 'podcast',
	},
	{
		title: 'Blast Points',
		href: 'https://blastpointspodcast.com/',
		// type: 'podcast',
	},
	{
		title: 'Blue Bantha Milk Co',
		href: 'https://www.youtube.com/@BlueBanthaMilkCo',
		// type: 'podcast',
	},
	{
		title: 'Blue Harvest',
		href: 'https://blueharvest.rocks',
		// type: 'podcast',
	},
	{
		title: 'Bombadcast',
		href: 'https://www.youtube.com/@TheBombadcast',
		// type: 'podcast',
	},
	{
		title: 'Broaxium',
		href: 'https://www.youtube.com/@BROAXIUM',
		// type: 'podcast',
	},
	{
		title: 'Canto Bight Dispatch',
		href: 'https://soundcloud.com/user-12011751-343526245',
		// type: 'podcast',
	},
	{
		title: 'Children of the Watch',
		href: 'https://podcasts.apple.com/us/podcast/children-of-the-watch-a-star-wars-after-show/id1459175606',
		// type: 'podcast',
	},
	{
		title: 'GALactic Podcast',
		href: 'https://linktr.ee/thegalacticpod',
		// type: 'podcast',
	},
	{
		title: 'High Potion',
		href: 'https://podcasters.spotify.com/pod/show/highpotion',
		// type: 'podcast',
	},
	{
		title: 'Rogue Rebels',
		href: 'https://theroguerebels.com/',
		// type: 'podcast',
	},
	{
		title: 'Scruffy Looking Podcasters',
		href: 'https://scruffypodcasters.podbean.com/',
		// type: 'podcast',
	},
	{
		title: 'Sistas With Sabers',
		href: 'https://podcasters.spotify.com/pod/show/sistaswithsabers',
		// type: 'podcast',
	},
	{
		title: 'Star Wars Spelt Out',
		href: 'https://starwarsspeltout.podbean.com/',
		// type: 'podcast',
	},
	{
		title: 'Steele Wars',
		href: 'https://www.youtube.com/@SteeleWars',
		// type: 'podcast',
	},
	{
		title: 'Talking Bay 94',
		href: 'https://www.talkingbay94.com/',
		// type: 'podcast',
	},
	{
		title: 'The Nerd Room',
		href: 'https://www.thenerdroom.net/',
		// type: 'podcast',
	},
	{
		title: 'The Sith List ',
		href: 'https://sithlist.com/',
		// type: 'podcast',
	},
].sort((a, b) => {
	if (a.title < b.title) return -1
	if (a.title > b.title) return 1
	return 0
})

export default items
