import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
	console.log('Revalidating "episodes" tag')
	revalidateTag('episodes')

	const searchParams = request.nextUrl.searchParams
	const force = searchParams.get('force')
	if (!!force) {
		console.log('Revalidating /episodes forcefully')
		revalidatePath('/episodes')
	}

	return Response.json({ success: true, force: !!force })
}
