import { createSanityClient } from '@shawnphoffman/pod-sites-shared/sanity'

import { apiVersion, dataset, projectId, useCdn } from './sanity.env'

export default createSanityClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
})
