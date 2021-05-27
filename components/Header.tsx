import { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
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
	const router = useRouter()

	return (
		<header className='flex flex-col items-center justify-between h-auto m-5 sm:flex-row sm:mr-10'>
			<div className='flex flex-grow max-w-2xl justify-evenly'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
				<HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
				<HeaderItem title='SEARCH' Icon={SearchIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Image
				className='object-contain cursor-pointer'
				src={'/hulu.svg'}
				// layout={'responsive'}
				onClick={() => router.push('/')}
				width={200}
				height={100}
			/>
		</header>
	)
}

export default Header
