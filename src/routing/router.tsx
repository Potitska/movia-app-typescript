import {createBrowserRouter, Navigate} from "react-router-dom";

import {appRoutes} from "./appRoutes";
import {MainLayout} from "../layouts";
import { GenresPage, MovieDetailsPage, MoviesPage} from "../pages";
import {MoviesByGenre} from "../components";

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
                        element: <MovieDetailsPage/>
                    }
                ]
            },
            {
                path:appRoutes.GENRES,
                element:<GenresPage/>
            },
            {
                path:appRoutes.MOVIE_BY_GENRE,
                element:<MoviesByGenre/>
            }
        ]
    }
])

export {
    router
}