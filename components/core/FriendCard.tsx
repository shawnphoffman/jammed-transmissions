export default function FriendCard({ title, href }) {
	return (
		<a
			className="min-w-[250px] flex-[1_1_250px] max-w-[350px] flex flex-row justify-center items-center text-4xl h-auto min-h-[3.25rem] gap-2 rounded-lg animate-fadeInUp transition-all hover:scale-105 bg-brand4/25 text-white p-2"
			href={href}
			target="_blank"
			rel="noopener noreferrer"
		>
			<h2 className="m-0 font-bold text-xl">{title}</h2>
		</a>
	)
}
