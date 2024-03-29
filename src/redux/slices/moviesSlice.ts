import {createSlice} from "@reduxjs/toolkit";

interface IState {

}

const initialState: IState = {};

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers:{}
})

const {reducer:movieReducer, actions} = moviesSlice;

const movieActions={
    ...actions
}

export {
    movieActions,
    movieReducer
}