import {axiosService} from "./axiosService";
import {IGenre, IMovie, IPagination, ISearch} from "../interfaces";
import {urls} from "../constants";

const movieService = {
    getAll: (page: number) => axiosService.get<IPagination>(urls.movies(page)),
    getGenres: () => axiosService.get<IGenre>(urls.genres()),
    getMovieByName: (name: string, page: number) => axiosService.get<ISearch>(urls.searchMovie(name, page)),
    getMovieById: (id: number) => axiosService.get<IMovie>(urls.movieById(id)),
    getMoviesByGenre: (genre_key: number, page: number) => axiosService.get<IPagination>(urls.moviesByGenres(genre_key, page))

}

export {
    movieService
}