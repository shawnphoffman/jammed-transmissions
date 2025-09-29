import Image from 'next/image'

import GonkImg from './frik.png'
// import GonkImg from './gonk.png'

export default function Gonk() {
	return (
		<div className="mt-0 text-center overflow-hidden h-[100px] self-end" role="presentation" aria-hidden>
			{/* <Image src={GonkImg} width="150" height="150" alt="" /> */}
			<Image src={GonkImg} height="120" alt="" />
		</div>
	)
}
