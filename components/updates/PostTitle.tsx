export default function PostTitle({ children }) {
	return (
		<h1 className="mb-2 text-6xl font-bold bg-gradient-to-b inline-block text-transparent from-white via-brand1 to-brand2 bg-clip-text leading-tight tracking-tighter text-center mt-4  md:text-7xl md:leading-none lg:text-8xl text-balance">
			{children}
		</h1>
	)
}
