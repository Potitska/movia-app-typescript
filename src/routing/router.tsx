import {createBrowserRouter, Navigate} from "react-router-dom";

import {appRoutes} from "./appRoutes";
import {MainLayout} from "../layouts";
import {MovieDetailPage, MoviesPage} from "../pages";

const router = createBrowserRouter([
    {
        path: appRoutes.MAIN,
        element: <MainLayout/>,
        children: [
            {
                index:true,
                element: <Navigate to={'movies'}/>
            },
            {
                path: appRoutes.MOVIES,
                element: <MoviesPage/>,
                children: [
                    {
                        path: appRoutes.MOVIE_BY_ID,
                        element: <MovieDetailPage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}