import { revalidatePath } from 'next/cache'

export const dynamic = 'force-dynamic'
export async function GET() {
	console.log('Revalidating /episodes')
	revalidatePath('/episodes')
	return Response.json({ success: true })
}
