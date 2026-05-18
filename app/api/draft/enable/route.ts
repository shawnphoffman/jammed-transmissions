import { defineEnableDraftMode } from 'next-sanity/draft-mode'

import sanityClient from '@/sanity/sanity.client'
import { token } from '@/sanity/sanity.token'

export const { GET } = defineEnableDraftMode({
	client: sanityClient.withConfig({ token }),
})
