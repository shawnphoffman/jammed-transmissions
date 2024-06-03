import '@/app/global.css'
import '@/app/(pages)/pages.css'
import '@/app/(pages)/icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import titleLogo from '@/app/title.png'
import ActiveLink from '@/components/ActiveLink'
import StarBackground from '@/components/core/StarBackground'
import Gonk from '@/components/Gonk/Gonk'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: 'Jammed Transmissions',
	description: 'A positive, listener interactive Star Wars podcast since 2018',
	metadataBase: 'https://jammedtransmissions.com',
	openGraph: {
		title: 'Jammed Transmissions: A Star Wars Podcast',
		description: 'A positive, listener interactive Star Wars podcast since 2018',
		url: 'https://jammedtransmissions.com',
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${openSans.className} bg-gradient-to-b from-bg1 to-bg2 min-h-dvh h-full overflow-hidden p-0 m-0 w-dvw text-white`}
		>
			<head>
				<meta name="apple-itunes-app" content="app-id=1445333816" />
			</head>
			<body className="h-full overflow-hidden w-dvw">
				<StarBackground />
				<div className="scroller">
					<div className={'wrapper'}>
						<div className={'page'}>
							<div className={'header'}>
								<Image className={'headerLogo'} alt="Jammed Transmissions" src={titleLogo} width={450} height={160} priority />
								<div className="navContainer">
									<ActiveLink href="/" label="Links" />
									<ActiveLink href="/episodes" label="Episodes" />
									<ActiveLink href="/friends" label="Friends" />
									<ActiveLink href="/listen-now" label="Listen Now" />
								</div>
							</div>
							<div className={'pageDetails'}>{children}</div>
							<Gonk />
						</div>
					</div>
				</div>
				<Analytics />
			</body>
		</html>
	)
}
