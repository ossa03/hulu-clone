import { ForwardedRef, forwardRef } from 'react'
import Image from 'next/image'
import { FC } from 'react'
import { Result } from '../types'
import { ThumbUpIcon } from '@heroicons/react/solid'

type Props = {
	result: Result
}

const Thumbnail: FC<Props> = forwardRef(({ result }, ref) => {
	const baseUrl = 'https://image.tmdb.org/t/p/original/'

	return (
		<div
			className={'cursor-pointer group p-2 transform sm:hover:scale-105 transition ease-in-out duration-200 hover:z-50'}
			onClick={() => console.log(result)}
			ref={ref}
		>
			<Image
				className={'rounded'}
				src={`${baseUrl}${result.poster_path || result.backdrop_path}` || `${baseUrl}${result.backdrop_path}`}
				layout={'responsive'}
				width={1920}
				height={1080}
			/>
			<div className={'p-2'}>
				<p className={'truncate max-w-md'}>{result.overview}</p>
				<h2
					className={
						'mt-1 text-2xl transition-all duration-100 ease-in-out group-hover:text-white group-hover:font-bold'
					}
				>
					{result.title || result.original_title}
				</h2>
				<p className={'flex items-center transition-all duration-100 opacity-0 group-hover:opacity-100'}>
					{result.media_type && `${result.media_type} ・ `}
					{result.release_date || result.first_air_date} ・
					<ThumbUpIcon className={'h-4 mx-2'} />
					{result.vote_count}
				</p>
			</div>
		</div>
	)
})

export default Thumbnail
