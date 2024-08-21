import movieService from "../services/movieService";
import { defineStore } from "pinia";
import { Movie } from "types/movie";

export const useMovieStore = defineStore('movie', {
    state: () => ({
        movies: [] as Movie[],
        moviesFav: [] as Movie[],
    }),
    getters: {
        getMovies(): Movie[] {
            return this.movies;
        },
        getMoviesFav(): Movie[] {
            return this.moviesFav;
        },
    },
    actions: {
        async loadMoviesByPopularity() {            
            this.movies = await movieService.getMoviesByPopularity()
        },
        async searchMovies(query: string) {
            this.movies = [];
            this.movies = await movieService.searchMovieByQuery(query);
        },
        addMovieToFav(movie: Movie) {
            console.log('Adding movie to Fav...');
            this.moviesFav.push(movie);
        }
    }
});