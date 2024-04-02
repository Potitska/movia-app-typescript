import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";

import {IMovie} from "../../../interfaces";

import css from './movie.module.css';

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {id,title,poster_path} = movie;
    const img_url = `https://image.tmdb.org/t/p/w500${poster_path}`

    const navigate = useNavigate();

    return (
        <div className={css.card}>
            <img src={img_url} onClick={()=> navigate(`/movies/${id}`, {state: {...movie}})} alt="poster"/>
            <div>{title}</div>
        </div>
    );
};

export {Movie};