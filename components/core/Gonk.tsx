import Image from 'next/image'

import GonkImg from './gonk.png'

export default function Gonk() {
	return (
		<div className="mt-6 text-center overflow-hidden h-[100px]" role="presentation" aria-hidden>
			<Image src={GonkImg} width="150" height="150" alt="" />
		</div>
	)
}
