const baseURL = process.env.REACT_APP_API


const urls ={
    movie:(page:number):string => `/discover/movie?page=${page}`,
    genres:():string=>'/genre/movie/list',
    searchMovie:(name:string): string => `/search/keyword?query=${name}`,
    movieById:(id:number):string=> `/movie/${id}`,
    moviesByGenres: (genre_key: number, page:number):string=> `/discover/movie?with_genres=${genre_key}&page=${page}`
}


export {
    baseURL,
    urls
}
