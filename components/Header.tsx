import { FC } from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { HomeIcon } from '@heroicons/react/outline'

const Header: FC = () => {
	return (
		<header className='md:flex md:justify-between'>
			<div className='flex justify-around space-x-12 sm:space-x-20'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
			</div>
			<Image className='object-contain' src={'/hulu.svg'} width={200} height={100} />
		</header>
	)
}

export default Header
