import 'app/global.css'
import 'app/stars.css'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import titleLogo from 'app/title.png'
import ActiveLink from 'components/ActiveLink'
import Gonk from 'components/Gonk/Gonk'
import StarBackground from 'components/StarBackground'

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
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				<script src="https://kit.fontawesome.com/d7ccc5bb1a.js" crossOrigin="anonymous" defer></script>
				<meta name="apple-itunes-app" content="app-id=1445333816" />
			</head>
			<body>
				<StarBackground />
				<div className="scroller">
					<div className={'wrapper'}>
						<div className={'page'}>
							<div className={'header'}>
								<Image className={'headerLogo'} alt="Jammed Transmissions" src={titleLogo} width={450} height={160} priority />
								<div className="navContainer">
									<ActiveLink href="/" label="Links" />
									<ActiveLink href="/episodes" label="Episodes" />
									{/* <ActiveLink href="/" label="Episodes" /> */}
									{/* <ActiveLink href="/links" label="Links" /> */}
									<ActiveLink href="/friends" label="Friends" />
									<ActiveLink href="/listen-now" label="Listen Now" />
								</div>
							</div>
							<div className={'pageDetails'}>{children}</div>
							<Gonk />
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
