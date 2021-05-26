import { useRouter } from 'next/dist/client/router'
import { FC } from 'react'
import requests from '../utils/requests'

const Nav: FC = () => {
	const router = useRouter()

	return (
		<nav className={'relative'}>
			<div
				className={
					'flex text-xl space-x-10 whitespace-nowrap overflow-x-scroll scrollbar-hide px-10  sm:px-20 sm:space-x-20'
				}
			>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						className={
							'cursor-pointer transform transition duration-100 hover:scale-125 active:text-red-500 hover:text-white'
						}
						key={key}
						onClick={() => router.push(`/genre=${key}`)}
					>
						{title}
					</h2>
				))}
			</div>
			<div className={'absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 '} />
		</nav>
	)
}

export default Nav
