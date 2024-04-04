import {axiosService} from "./axiosService";
import { IMovie, IPagination, ISearch} from "../interfaces";
import {urls} from "../constants";
import {IGenres} from "../interfaces/genres.interface";

const movieService = {
    getAll: (page: number) => axiosService.get<IPagination>(urls.movies(page)),
    getGenres: () => axiosService.get<IGenres>(urls.genres()),
    getMovieByName: (name: string) => axiosService.get<ISearch>(urls.searchMovie(name)),
    getMovieById: (id: number) => axiosService.get<IMovie>(urls.movieById(id)),
    getMoviesByGenre: (id: string) => axiosService.get<IPagination>(urls.moviesByGenres(id))

}

export {
    movieService
}