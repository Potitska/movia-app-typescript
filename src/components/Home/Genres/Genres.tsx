import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../../hooks/reduxHooks";
import {movieActions} from "../../../redux";
import {Genre} from "../Genre/Genre";

import css from './genres.module.css';

const Genres:FC = () => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.movies);


    useEffect(()=>{
        dispatch(movieActions.allGenres())
    },[dispatch])

    return (
        <div className={css.genresList}>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};