import 'styles/globals.css'

import { LazyMotion } from 'framer-motion'
import { styled } from 'linaria/react'
import Head from 'next/head'

import Header from 'components/Header/Header'
import NavBar from 'components/NavBar/NavBar'

const loadMotion = () => import('config/motion.js').then(res => res.default)

function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Meta */}
				<title>Jammed Transmissions</title>
				<meta name="title" content="Jammed Transmissions: A Star Wars Podcast" />
				{/* <meta name="description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" /> */}
				{/* <!-- Facebook Meta Tags --> */}
				<meta property="og:url" content="https://jammedtransmissions.com" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Jammed Transmissions: A Star Wars Podcast" />
				{/* <meta property="og:description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" /> */}
				{/* TODO Import this */}
				{/* <meta property="og:image" content="https://jammedtransmissions.com/images/fb.png" /> */}
				<meta property="og:image:width" content="1201" />
				<meta property="og:image:height" content="630" />

				{/* <!-- Twitter Meta Tags --> */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content="@JTComlink" />
				<meta property="twitter:url" content="https://jammedtransmissions.com" />
				<meta name="twitter:title" content="Jammed Transmissions: A Star Wars Podcast" />
				{/* <meta name="twitter:description" content="Star Wars podcast hosted by Hawes Burkhardt and Will Whitten" /> */}
				{/* TODO Import this */}
				{/* NOTE This image should be 1:1. Min: 144x144. Max: 4096x4096 */}
				{/* <meta name="twitter:image" content="https://jammedtransmissions.com/images/pod-cover.jpeg" /> */}
				{/* <meta name="twitter:image:alt" content="Hawes and Will drawn as Boba Fett and Fennec Shand on Jabba's throne" /> */}

				{/* <!-- Icons --> */}
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
			</Head>
			<ThemeContainer>
				<LazyMotion features={loadMotion} strict>
					{/* <Layout> */}
					<Container>
						<Details>
							<Header />
							<NavBar />
						</Details>
						<Component {...pageProps} />
					</Container>
					{/* </Layout> */}
				</LazyMotion>
			</ThemeContainer>
		</>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 900px;
	width: 100%;
	background-attachment: fixed;
	background-size: 700px;
	padding-bottom: 32px;
`
const Details = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
`
const ThemeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export default App
