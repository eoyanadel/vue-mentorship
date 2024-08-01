import { Movie } from './movie';

export interface ApiResponse {
    page: number,
    results: Movie[],
};