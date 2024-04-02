import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux";
import {useAppLocation} from "../../../hooks/routerHooks";

import css from './movieDetails.module.css';



const MovieDetails: FC = () => {
    const {state} = useAppLocation();
    const { id } = state as { id: number };

    const dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movies);



    useEffect(()=>{
        dispatch(movieActions.getMovieDetails(id))
    },[dispatch,id])

    if (!movieDetails){
        return null
    }
    return (
        <div className={css.card}>
            <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={'poster'}/>
            <div className={css.title}>{movieDetails.title} </div>
            <div>Overview: {movieDetails.overview}</div>
            <div>Original language: {movieDetails.original_language}</div>
            <div>Release date: {movieDetails.release_date}</div>
            <div>Popularity: {movieDetails.popularity}</div>
        </div>
    );
};

export {MovieDetails};