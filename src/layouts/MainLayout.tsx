import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";

import css from './mainLayout.module.css';
import {useAppSelector} from "../hooks/reduxHooks";
const MainLayout = () => {
    const {themeCheck} = useAppSelector(state => state.theme);
    return (
        <div className={themeCheck?css.black:css.white}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};