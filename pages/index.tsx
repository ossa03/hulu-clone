import Head from 'next/head'
import { FC } from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import { requests } from '../utils/requests'
import { getAsString } from '../utils/getAsString'
import { Result } from '../types'

type Props = {
	results: Result[]
}

const Home: FC<Props> = ({ results }) => {
	console.log(results)

	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
			</Head>

			<Header />
			<Nav />
			<Results results={results} />
		</div>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
	const genre = getAsString(context.query.genre)

	// `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=1365`
	const res = await axios.get(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
	const results: Result[] = res.data.results

	if (!results) {
		return {
			notFound: true,
		}
	}

	return {
		props: { results }, // will be passed to the page component as props
	}
}
