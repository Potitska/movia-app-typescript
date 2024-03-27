export  interface IMovie{
    id:number;
    title: string;
    overview: string;
    release_date: string;
    genre_ids: number[];
    popularity: number;
    poster_path: string;
    vote_average: number;
}