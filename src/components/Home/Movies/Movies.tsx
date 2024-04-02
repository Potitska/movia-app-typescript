import React, {FC, useEffect} from 'react';

import {Movie} from "../Movie/Movie";
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux";

import css from './movies.module.css';




const Movies: FC = () => {

   const dispatch = useAppDispatch();
   const {movies} = useAppSelector(state => state.movies);

   useEffect(()=>{
       dispatch(movieActions.getAll(1))
   },[dispatch])

    return (
        <div className={css.list_card}>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};