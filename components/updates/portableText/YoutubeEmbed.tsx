'use client'

import React, { useEffect, useRef, useState } from 'react'

const LazyYoutube = ({ videoId }) => {
	const [load, setLoad] = useState(false)
	const videoRef = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(entries => {
			if (entries[0].isIntersecting) {
				setLoad(true)
				observer.disconnect()
			}
		})

		// @ts-ignore
		observer.observe(videoRef.current)

		return () => {
			if (videoRef.current) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				observer.unobserve(videoRef.current)
			}
		}
	}, [])

	return (
		<div
			ref={videoRef}
			className="mx-4 my-6 overflow-hidden border border-transparent rounded-lg bg-slate-950/50 hover:border-brand-shade-3"
		>
			{load ? (
				<iframe
					width="100%"
					height="400"
					src={`https://www.youtube.com/embed/${videoId}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			) : (
				<div>Loading...</div>
			)}
		</div>
	)
}

export default LazyYoutube
