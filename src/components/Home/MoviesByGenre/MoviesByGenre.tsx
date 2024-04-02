import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux";
import {useParams} from "react-router-dom";

import {Movie} from "../Movie/Movie";

import css from './moviesByGenre.module.css';

const MoviesByGenre: FC = () => {
    const {genre_key, page} = useParams();

    const dispatch = useAppDispatch();
    const {moviesByGenre} = useAppSelector(state => state.movies);


    useEffect(()=>{
        if (genre_key && page){
            dispatch(movieActions.movieByGenre([genre_key, parseInt(page)]))
        }
    },[genre_key, page, dispatch])



    return (
        <div className={css.movies_list}>
            {moviesByGenre? moviesByGenre.map(movie=><Movie key={movie.id} movie={movie}/>):null}
        </div>
    );
}



export {MoviesByGenre};