import {IGenre} from "./genre.interface";

export  interface IMovie{
    id:number;
    title: string;
    overview: string;
    release_date: string;
    original_language:string;
    genres: IGenre[];
    popularity: number;
    poster_path: string;
    vote_average: number;
}