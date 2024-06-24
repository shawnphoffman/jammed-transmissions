'use client'

import { faFacebookSquare, faSquareXTwitter } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/brands'
import { faSquareEnvelope } from '@awesome.me/kit-d7ccc5bb1a/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'next-share'

export default function ShareButtons({ slug, title }) {
	const domain = !!(process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV)
		? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
		: 'http://localhost:3000'
	const url = `${domain}/updates/${slug}`
	const formattedTitle = `Just Shillin': ${title}`

	return (
		<div className="flex flex-row items-center gap-2">
			{/*  */}
			<FacebookShareButton url={url} quote={formattedTitle}>
				<FontAwesomeIcon icon={faFacebookSquare} size="2x" className="hover:text-white text-neutral-400" />
			</FacebookShareButton>
			{/*  */}
			<TwitterShareButton url={url} title={formattedTitle}>
				<FontAwesomeIcon icon={faSquareXTwitter} size="2x" className="hover:text-white text-neutral-400" />
			</TwitterShareButton>
			{/*  */}
			<EmailShareButton url={url} subject={formattedTitle} body={title}>
				<FontAwesomeIcon icon={faSquareEnvelope} size="2x" className="hover:text-white text-neutral-400" />
			</EmailShareButton>
		</div>
	)
}
