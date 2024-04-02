import React, {FC} from 'react';

import css from './header.module.css';
import {Link, NavLink} from "react-router-dom";
import {SearchMovie} from "./SearchMovie";

const Header: FC = () => {
    return (
        <div className={css.header}>
            <Link to={'/'}><div className={css.name}>Binge-Watch</div></Link>
            <NavLink className={css.moviesList} to={{pathname: '/movies', search: '?page=1'}}>Movies</NavLink>
            <NavLink className={css.moviesList} to={'/genres'}>Genres</NavLink>
            <div>Switch</div>
            <SearchMovie/>
        </div>
    );
};

export {Header};