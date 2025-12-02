import { readdir } from 'fs/promises'
import { join } from 'path'
import Image from 'next/image'

// Force static generation
export const dynamic = 'force-static'
export const revalidate = false

async function getMediaImages() {
	// Try multiple possible paths for different environments
	const possiblePaths = [
		join(process.cwd(), 'public', 'media'),
		join(process.cwd(), '.next', 'static', 'media'),
		join(process.cwd(), 'media'),
	]

	for (const mediaPath of possiblePaths) {
		try {
			const files = await readdir(mediaPath)
			// Filter for image files
			const imageFiles = files.filter(
				file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.gif') || file.endsWith('.webp')
			)
			if (imageFiles.length > 0) {
				return imageFiles.sort()
			}
		} catch {
			// Try next path
			continue
		}
	}

	// Fallback: return known images if fs fails (for Vercel runtime)
	// This ensures the page still works even if fs access fails
	console.warn('Could not read media directory, using fallback list')
	return ['jt-01.png', 'jt-02.png', 'jt-02@2x.png', 'jt-03.png', 'jt-04.png', 'jt-05.png', 'jt-black-01.png', 'jt-black-02.png'].sort()
}

export default async function MediaPage() {
	const images = await getMediaImages()

	return (
		<div className="w-full max-w-full">
			{/* <h1 className="mb-6 text-2xl font-bold">Media</h1> */}
			<div className="flex flex-col gap-1">
				{images.map(image => {
					const needsBg = image.includes('onwhite')
					return (
						<Image
							key={image}
							src={`/media/${image}`}
							alt={image.replace(/\.(png|jpg|jpeg|gif|webp)$/i, '')}
							// fill
							// objectFit="contain"
							width={1500}
							height={500}
							quality={100}
							className={`object-contain rounded-lg ${needsBg ? 'bg-white' : ''}`}
							sizes="100vw"
						/>
					)
				})}
			</div>
		</div>
	)
}
