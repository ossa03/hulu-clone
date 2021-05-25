import { FC } from 'react'

type HeaderItem = {
	Icon: any
	title: string
}

const HeaderItem: FC<HeaderItem> = ({ Icon, title }) => {
	return (
		<div>
			<Icon className='h-8' />
			<p>{title}</p>
		</div>
	)
}

export default HeaderItem
