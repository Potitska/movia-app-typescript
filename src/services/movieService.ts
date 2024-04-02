import {axiosService} from "./axiosService";
import { IMovie, IPagination, ISearch} from "../interfaces";
import {urls} from "../constants";
import {IGenres} from "../interfaces/genres.interface";

const movieService = {
    getAll: (page: number) => axiosService.get<IPagination>(urls.movies(page)),
    getGenres: () => axiosService.get<IGenres>(urls.genres()),
    getMovieByName: (name: string, page: number) => axiosService.get<ISearch>(urls.searchMovie(name, page)),
    getMovieById: (id: number) => axiosService.get<IMovie>(urls.movieById(id)),
    getMoviesByGenre: (genre_key: string, page: number) => axiosService.get<IPagination>(urls.moviesByGenres(genre_key, page))

}

export {
    movieService
}