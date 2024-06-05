import '@/app/global.css'
import '@/app/(pages)/icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { Analytics } from '@vercel/analytics/react'
import { Open_Sans } from 'next/font/google'
import Image from 'next/image'

import titleLogo from '@/app/title.png'
import ActiveLink from '@/components/core/ActiveLink'
import Gonk from '@/components/core/Gonk'
import StarBackground from '@/components/core/StarBackground'

const openSans = Open_Sans({ subsets: ['latin'] })

const title = 'Jammed Transmissions'
const description = 'A positive, listener interactive Star Wars podcast since 2018'
const url = 'https://jammedtransmissions.com'

export const metadata = {
	title: {
		template: `%s | ${title}`,
		default: title,
	},
	description,
	metadataBase: url,
	openGraph: {
		title: `${title}: A Star Wars Podcast`,
		description,
		url: url,
		locale: 'en_US',
		type: 'website',
	},
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${openSans.className} bg-brand-background-dark bg-gradient-to-b from-brand-background-dark to-brand-background-light text-white p-0 m-0 overflow-x-hidden w-dvw`}
		>
			<head>
				<meta name="apple-itunes-app" content="app-id=1445333816" />
			</head>
			<body className="h-full px-2 py-0 mx-auto my-0 text-white w-dvw min-h-dvh">
				<StarBackground />
				<div className="flex flex-col items-center w-full max-w-screen-xl mx-auto">
					<div className="z-10 flex flex-col w-full max-w-4xl min-h-dvh">
						<div className="flex flex-col items-center gap-4 m-4 text-center">
							<h1 className="sr-only">{title}</h1>
							<Image
								className="h-auto max-w-[450px] w-full fa-fade"
								alt="Jammed Transmissions"
								src={titleLogo}
								width={450}
								height={160}
								priority
								style={{ '--fa-fade-opacity': 0.85, '--fa-animation-duration': '2s' } as React.CSSProperties}
							/>
							<div className="flex flex-row flex-wrap justify-center gap-x-4 gap-y-1">
								<ActiveLink href="/" label="Links" />
								<ActiveLink href="/episodes" label="Episodes" />
								{process.env.VERCEL_ENV !== 'production' && <ActiveLink href="/updates" label="Updates" fuzzy />}
								<ActiveLink href="/friends" label="Friends" />
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
