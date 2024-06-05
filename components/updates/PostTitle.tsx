export default function PostTitle({ children }) {
	return (
		<h1 className="inline-block w-full mb-2 text-4xl font-bold leading-tight tracking-tighter text-center text-transparent sm:text-5xl md:mt-4 md:text-6xl bg-gradient-to-b from-white via-brand-shade-1 to-brand-shade-2 bg-clip-text md:leading-none lg:text-8xl text-balance">
			{children}
		</h1>
	)
}
