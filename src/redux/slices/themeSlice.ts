import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

interface IState {
    themeCheck:boolean;
}

const initialState:IState={
    themeCheck:false
}

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers:{
        changeThemeCheck:state=>{
            state.themeCheck = !state.themeCheck
        }
    }
});

const {reducer:themeReducer, actions:themeActions} = themeSlice;

export {
    themeReducer,
    themeActions
}