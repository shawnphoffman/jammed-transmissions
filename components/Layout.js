import Head from 'next/head'

export default function Layout({ children }) {
	return (
		<>
			<Head></Head>
			<div>{children}</div>
		</>
	)
}
