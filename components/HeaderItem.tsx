import { FC } from 'react'

type HeaderItem = {
	Icon: any
	title: string
}

const HeaderItem: FC<HeaderItem> = ({ Icon, title }) => {
	return (
		<div
			className={'flex flex-col justify-center items-center hover:text-white group cursor-pointer active:text-red-500'}
		>
			<Icon className='w-12 h-8 mb-1 md:w-20 group-hover:animate-bounce' />
			<p className={'opacity-0 group-hover:opacity-100 transition duration-100 tracking-widest'}>{title}</p>
		</div>
	)
}

export default HeaderItem
