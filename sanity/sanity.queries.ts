import {
	buildAwardsQuery,
	buildBannerQuery,
	buildPostSlugsQuery,
	buildPostsListQuery,
	postBySlugQuery,
} from '@shawnphoffman/pod-sites-shared/sanity'

const podId = '7c28ad82-6f13-437e-8af5-c8285ac2269f'

export const postsListQuery = buildPostsListQuery(podId)
export const postSlugsQuery = buildPostSlugsQuery(podId)
export { postBySlugQuery }
export const BANNER_QUERY = buildBannerQuery(podId)
export const AWARDS_QUERY = buildAwardsQuery(podId)
