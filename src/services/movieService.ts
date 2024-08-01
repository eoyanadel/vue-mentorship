import axios from "axios";
//import { ApiResponse } from '../../types/apiResponse';
import { ApiError } from '../../types/apiError';
import { Movie } from "types/movie";

export default class MovieService {
    protected baseUrl: string;
    protected apiKey: string;

    constructor(baseUrl: string, apiKey: string) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    };

    public getMoviesByPopularity = async (): Promise<Movie[]> => {        
        const url = `${ this.baseUrl }discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${ this.apiKey }`;
        
        const response = await axios.get(url)
            .then((response: any) => response.data)
            .catch((error: ApiError) => {
                throw error;
            });        

        console.log('response: ', response);

        return response.results;
    };
}