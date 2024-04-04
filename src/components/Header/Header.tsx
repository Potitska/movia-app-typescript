import React, {FC} from 'react';

import {Switch} from "@mui/material";

import {Link, NavLink} from "react-router-dom";
import {SearchMovie} from "./SearchMovie";

import css from './header.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {themeActions} from "../../redux";

const Header: FC = () => {

    const dispatch = useAppDispatch();
    const {themeCheck} = useAppSelector(state => state.theme);
    return (
        <div className={css.header}>
            <Link to={'/'}><div className={css.name}>Binge-Watch</div></Link>
            <NavLink className={css.moviesList} to={{pathname: '/movies', search: '?page=1'}}>Movies</NavLink>
            <NavLink className={css.moviesList} to={'/genres'}>Genres</NavLink>
            <SearchMovie/>
            <Switch defaultChecked={themeCheck} onChange={()=>dispatch(themeActions.changeThemeCheck())} />
        </div>
    );
};

export {Header};