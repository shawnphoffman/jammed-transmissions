import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from './sanity.env'

export default createClient({
	apiVersion,
	dataset,
	projectId,
	useCdn,
	perspective: 'published',
})
