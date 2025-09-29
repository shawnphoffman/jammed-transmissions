import { CSSProperties } from 'react'
import '@/app/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import titleLogo from '@/app/title.png'
import ActiveLink from '@/components/core/ActiveLink'
import Gonk from '@/components/core/Gonk'
import StarBackground from '@/components/core/StarBackground'

import { siteDescription, siteTitle, siteUrl } from './meta'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
	title: {
		template: `%s | ${siteTitle}`,
		default: siteTitle,
	},
	description: siteDescription,
	metadataBase: new URL(siteUrl),
	openGraph: {
		title: `${siteTitle}: A Star Wars Podcast`,
		description: siteDescription,
		url: siteUrl,
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${openSans.className} bg-black text-white p-0 m-0 overflow-x-hidden w-dvw`}>
			<head>
				<meta name="apple-itunes-app" content="app-id=1445333816" />
			</head>
			<body className="px-2 py-0 mx-auto my-0 text-white min-h-dvh w-dvw bg-gradient-to-b from-brand-background-dark to-brand-background-light">
				<StarBackground />
				<div className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
					<div className="z-10 flex flex-col w-full max-w-4xl min-h-dvh">
						<div className="flex flex-col items-center gap-4 m-4 text-center">
							<h1 className="sr-only">{siteTitle}</h1>
							<Image
								className="h-auto max-w-[450px] w-full fa-fade"
								alt=""
								src={titleLogo}
								width={450}
								height={160}
								priority
								style={{ '--fa-fade-opacity': 0.85, '--fa-animation-duration': '2s' } as CSSProperties}
							/>
							<div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-1">
								<ActiveLink href="/" label="Links" />
								<ActiveLink href="/episodes" label="Episodes" />
								{process.env.VERCEL_ENV !== 'production' && <ActiveLink href="/updates" label="Updates" fuzzy />}
								<ActiveLink href="/updates/our-friends" label="Friends" />
								<ActiveLink href="/listen-now" label="Listen Now" />
							</div>
						</div>
						<div className="flex flex-col items-center flex-1 gap-4 text-center">{children}</div>
						<Gonk />
					</div>
				</div>
				{process.env.VERCEL_ENV === 'production' && <Analytics />}
			</body>
		</html>
	)
}
