import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./slices/moviesSlice";
import {themeReducer} from "./slices/themeSlice";

const store = configureStore({
    reducer:{
        movies: movieReducer,
        theme:themeReducer
    }
});

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}