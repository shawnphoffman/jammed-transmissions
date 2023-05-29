import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

// TODO Update to use new next font loader
// https://beta.nextjs.org/docs/optimizing/fonts#google-fonts

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Normalize */}
				<Script src="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" defer />

				{/* <!-- Google Fonts --> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					rel="stylesheet"
					as="style"
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&text=abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890%26&display=swap"
				/>
				{/* <!-- FontAwesome Icons --> */}
				<Script src="https://kit.fontawesome.com/d7ccc5bb1a.js" strategy="afterInteractive" crossOrigin="anonymous" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
