const baseURL = process.env.REACT_APP_API


const urls ={
    movies:(page:number):string => `/discover/movie?page=${page}`,
    genres:():string=>'/genre/movie/list',
    searchMovie:(name:string): string => `/search/keyword?query=${name}`,
    movieById:(id:number):string=> `/movie/${id}`,
    moviesByGenres: (id: string):string=> `/discover/movie?with_genres=${id}`
}


export {
    baseURL,
    urls
}
