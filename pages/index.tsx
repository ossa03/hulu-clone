import Head from 'next/head'
import { FC } from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'

const Home: FC = () => {
	return (
		<div>
			<Head>
				<title>Hulu 2.0</title>
			</Head>

			<Header />
			<Nav />
			{/* Result s */}
		</div>
	)
}

export default Home
