const TMDB_API_KEY = process.env.TMDB_API_KEY

export type Request = {
	[key: string]: {
		title: string
		url: string
	}
}

// base url
// https://api.themoviedb.org/3/

export const requests: Request = {
	// https://api.themoviedb.org/3/movie/550?api_key=0b366f064b15d1f50807c42e647a8f7a
	fetchTrending: {
		title: 'Trending',
		url: `/trending/movie/week?api_key=${TMDB_API_KEY}&language=ja`,
	},
	fetchTopRated: {
		title: 'Top Rated',
		url: `/movie/top_rated?api_key=${TMDB_API_KEY}&language=ja`,
	},
	fetchActionMovies: {
		title: 'Action',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=1365`,
	},
	fetchComedyMovies: {
		title: 'Comedy',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: 'Horror',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: 'Romance',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=10749`,
	},
	fetchMystery: {
		title: 'Mystery',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=9648`,
	},
	fetchSciFi: {
		title: 'Sci-Fi',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=878`,
	},
	fetchWestern: {
		title: 'Western',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=37`,
	},
	fetchAnimation: {
		title: 'Animation',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=16`,
	},
	fetchTV: {
		title: 'TV Movie',
		url: `/discover/movie?api_key=${TMDB_API_KEY}&language=ja&sort_by=popularity.desc&with_genres=10770`,
	},
}
