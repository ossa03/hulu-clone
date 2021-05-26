import { FC } from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
	HomeIcon,
	BadgeCheckIcon,
	SearchIcon,
	CollectionIcon,
	LightningBoltIcon,
	UserIcon,
} from '@heroicons/react/outline'

const Header: FC = () => {
	return (
		<header className='flex flex-col items-center justify-between h-auto m-5 sm:flex-row'>
			<div className='flex flex-grow max-w-2xl justify-evenly'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Image className='object-contain ' src={'/hulu.svg'} width={200} height={100} />
		</header>
	)
}

export default Header
