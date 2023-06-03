const items = [
	// {
	// 	title: 'Blue Harvest',
	// 	href: 'https://blueharvest.rocks',
	// },
	// {
	// 	title: 'The Sith List',
	// 	href: 'https://sithlist.com/',
	// },
	// {
	// 	title: 'The Bad Motivators',
	// 	href: 'https://podcasters.spotify.com/pod/show/the-bad-motivators',
	// },
	// {
	// 	title: 'Canto Bight Dispatch',
	// 	href: 'https://soundcloud.com/user-12011751-343526245',
	// },
	// {
	// 	title: 'Scruffy Looking Podcasters',
	// 	href: 'https://scruffypodcasters.podbean.com/',
	// },
	// {
	// 	title: 'Rogue Rebels',
	// 	href: 'https://theroguerebels.com/',
	// },
	// {
	// 	title: 'Star Wars Spelt Out',
	// 	href: 'https://starwarsspeltout.podbean.com/',
	// },
	// {
	// 	title: 'That Geek Pod',
	// 	href: 'https://thatgeekpod.podbean.com/',
	// },
	{
		title: 'xxx1',
		href: 'xxx',
	},
	{
		title: 'xxx2',
		href: 'xxx',
	},
	{
		title: 'xxx3',
		href: 'xxx',
	},
].sort((a, b) => {
	if (a.title < b.title) return -1
	if (a.title > b.title) return 1
	return 0
})

export default items
