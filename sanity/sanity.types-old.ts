export interface Author {
	name?: string
	image?: any
}

export interface Post {
	_id: string
	_updatedAt?: string
	title: string
	slug: string
	mainImage?: any
	publishedAt: string
	author: Author
	body: any
	excerpt: string
}

export interface Settings {
	title?: string
	description?: any[]
	ogImage?: {
		title?: string
	}
}
