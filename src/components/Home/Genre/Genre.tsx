import React, {FC} from 'react';

import {IGenre} from "../../../interfaces";

import css from './genre.module.css';
import {NavLink} from "react-router-dom";

interface IProps {
    genre: IGenre;
}
const Genre: FC<IProps> = ({genre}) => {
    const {id,name} = genre;
    return (
        <div className={css.linkList}>
           <NavLink to={{pathname: `/genres/${id}`, search: '?page=1'}}>{name}</NavLink>
        </div>
    );
};

export {Genre};