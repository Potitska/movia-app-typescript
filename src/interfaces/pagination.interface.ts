import {IMovie} from "./movie.interface";

export interface IPagination{
    page: number;
    total_results: number;
    total_pages: number;
    results: IMovie[];
}