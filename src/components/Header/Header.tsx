import React, {FC} from 'react';

import css from './header.module.css';
import {Link, NavLink} from "react-router-dom";
import {SearchMovie} from "./SearchMovie";

const Header: FC = () => {
    return (
        <div className={css.header}>
            <Link to={'/'}><div className={css.name}>Binge-Watch</div></Link>
            <div className={css.moviesList}>Movies</div>
            <NavLink className={css.moviesList} to={'/genres'}>Genres</NavLink>
            <div>Switch</div>
            <SearchMovie/>
        </div>
    );
};

export {Header};