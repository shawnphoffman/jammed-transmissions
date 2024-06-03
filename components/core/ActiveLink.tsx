'use client'

import classnames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
	label: string
	href: string
	fuzzy?: boolean
}

const ActiveLink = ({ label, href, fuzzy, ...rest }: Props) => {
	const currentRoute = usePathname()
	const isActive = fuzzy ? currentRoute.toLowerCase().startsWith(href) : currentRoute === href

	const conditionalClasses = classnames(
		isActive ? 'decoration-brandOrange underline underline-offset-[7px] decoration-[1px]' : 'hover:text-brandOrange'
	)

	return (
		<Link {...rest} href={href} className={`text-lg font-bold whitespace-nowrap cursor-pointer pb-0.5 ${conditionalClasses}`}>
			{label}
		</Link>
	)
}

export default ActiveLink
