import React, {FC, PropsWithChildren} from 'react';
import {IMovie} from "../../../interfaces";

import css from './movieDetails.module.css';
import {useAppLocation} from "../../../hooks/routerHooks";



const MovieDetails: FC = () => {
    const {state} = useAppLocation<IMovie>();

    const {title,poster_path,overview,release_date,popularity,original_language} = state;
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div className={css.card}>
            <img src={img_url} alt={'poster'}/>
            <div className={css.title}>{title} </div>
            <div>Overview: {overview}</div>
            <div>Original language: {original_language}</div>
            <div>Release date: {release_date}</div>
            <div>Popularity: {popularity}</div>
        </div>
    );
};

export {MovieDetails};