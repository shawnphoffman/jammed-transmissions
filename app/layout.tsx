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
			className={`${openSans.className} bg-gradient-to-b from-bg1 to-bg2 min-h-dvh h-full overflow-hidden p-0 m-0 w-dvw text-white`}
		>
			<head>
				<meta name="apple-itunes-app" content="app-id=1445333816" />
			</head>
			<body className="h-full overflow-hidden w-dvw">
				<StarBackground />
				<div className="w-full h-dvh mx-auto px-4 overflow-y-scroll overflow-x-hidden">
					<div className="flex flex-col items-center max-w-screen-xl w-full mx-auto">
						<div className="flex flex-col max-w-4xl w-full min-h-dvh z-10">
							<div className="text-center flex flex-col items-center gap-4 m-4">
								<Image
									className="h-auto max-w-[450px] w-full"
									alt="Jammed Transmissions"
									src={titleLogo}
									width={450}
									height={160}
									priority
								/>
								<div className="flex flex-row flex-wrap justify-center gap-4">
									<ActiveLink href="/" label="Links" />
									<ActiveLink href="/episodes" label="Episodes" />
									{process.env.VERCEL_ENV !== 'production' && <ActiveLink href="/updates" label="Updates" />}
									<ActiveLink href="/friends" label="Friends" />
									<ActiveLink href="/listen-now" label="Listen Now" />
								</div>
							</div>
							<div className="text-center flex flex-col items-center flex-1 gap-4">{children}</div>
							<Gonk />
						</div>
					</div>
				</div>
				{process.env.VERCEL_ENV === 'production' && <Analytics />}
			</body>
		</html>
	)
}
