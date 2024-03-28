import React, {FC, useEffect, useState} from 'react';

import {IMovie} from "../../../interfaces";
import {movieService} from "../../../services";
import {Movie} from "../Movie/Movie";

import css from './movies.module.css';





const Movies: FC = () => {

    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        movieService.getAll(1).then(({data}) => setMovies(data.results))
    }, [])

    return (
        <div className={css.list_card}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};