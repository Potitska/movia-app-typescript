import React, {FC, useEffect, useState} from 'react';

import {IMovie} from "../interfaces";
import {movieService} from "../services";
import {Movie} from "./Movie";





const Movies: FC = () => {

    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        movieService.getAll(1).then(({data}) => setMovies(data.results))
    }, [])

    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};