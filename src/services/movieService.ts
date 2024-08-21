import { BASE_API_URL, API_KEY } from "../globalConstants";
import axios from "axios";
import { ApiError } from "types/apiError";
import { Movie } from "types/movie";

const baseUrl = BASE_API_URL;
const apiKey = API_KEY;

const getMoviesByPopularity = async (): Promise<Movie[]> => {        
    const url = `${ baseUrl }discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${ apiKey }`;
    
    const response = await axios.get(url)
        .then((response: any) => response.data)
        .catch((error: ApiError) => {
            throw error;
        });        

    console.log('response: ', response);

    return response.results;
};

const searchMovieByQuery = async (query: string): Promise<Movie[]> => {
    const url = `${ baseUrl }search/movie?query=${ query }&api_key=${ apiKey }`;

    const response = await axios.get(url)
        .then((response: any) => response.data)
        .catch((error: ApiError) => {
            throw error;
        });

    return response.results;
};

export default {
    getMoviesByPopularity,
    searchMovieByQuery,
}