import React, {FC} from 'react';

import {IMovie} from "../../../interfaces";

import css from './movie.module.css';

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    let {title,poster_path} = movie;
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div className={css.card}>
            <img src={img_url} alt="poster"/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};