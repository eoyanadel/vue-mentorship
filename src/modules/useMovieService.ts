import { API_KEY, BASE_API_URL, MOVIE_API_INJECTION_KEY } from "../globalConstants";
import MovieService from "../services/movieService";
import { App, inject } from "vue";

const configureMovieService = (
	app: App
) => {

	const movieService = new MovieService(BASE_API_URL, API_KEY);
	app.provide(MOVIE_API_INJECTION_KEY, movieService);
	console.log('movie-service up');
};

const useMovieService = () => {
	let movieService = {} as MovieService | undefined;

	try {
		movieService = inject(MOVIE_API_INJECTION_KEY);
	} catch (error) {
		console.error('useTechGenieService: configure TechGenie Module first', error);
	}

	return {
		movieService,
	};
};

export {
	configureMovieService,
	MOVIE_API_INJECTION_KEY,
};

export default useMovieService;