import 'styles/globals.css'
import 'styles/stars.sass'

import { Open_Sans } from 'next/font/google'
import Image from 'next/image'
import Script from 'next/script'

import styles from 'app/Global.module.css'
import titleLogo from 'app/title.png'
import Gonk from 'components/Gonk/Gonk'
import NavBar from 'components/NavBar/NavBar'

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

export const runtime = 'edge'

export default function RootLayout({ children }) {
	return (
		<html lang="en" style={{ fontFamily: openSans.style.fontFamily }}>
			<head>
				{/* <!-- FontAwesome Icons --> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" rel="preload" as="font" />
			</head>
			<body>
				<div id="stars" className="stars"></div>
				<div id="stars2" className="stars"></div>
				<div id="stars3" className="stars"></div>
				<div className="scroller">
					<div className={styles.wrapper}>
						<div className={styles.page}>
							<div className={styles.header}>
								<Image className={styles.headerLogo} alt="Jammed Transmissions" src={titleLogo} width={450} height={160} priority />
								<NavBar />
							</div>
							<div className={styles.pageDetails}>{children}</div>
							<Gonk />
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
