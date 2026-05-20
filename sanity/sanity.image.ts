import { createImageUrl } from '@shawnphoffman/pod-sites-shared/sanity'

import sanityClient from './sanity.client'

export const { urlForSanityImage } = createImageUrl(sanityClient)
