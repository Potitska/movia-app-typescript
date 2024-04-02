import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {IGenre, IMovie} from "../../interfaces";
import {movieService} from "../../services";



interface IState {
    movies: IMovie[];
    genres: IGenre[];
    moviesByGenre: IMovie[];
    movieDetails:IMovie | null;
    loading: boolean;
}

const initialState: IState = {
    movies: [],
    genres: [],
    moviesByGenre: [],
    movieDetails: null,
    loading: false,
};

const getAll = createAsyncThunk<IMovie[], number>(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(1);
            const {results} = data
            return results
        } catch (error) {
            return rejectWithValue('Failed to fetch movies')
        }
    }
)

const getMovieDetails = createAsyncThunk<IMovie, number>(
    'moviesSlice/getMovieDetails',
    async (id,{rejectWithValue})=>{
        try {
            const {data} = await movieService.getMovieById(id);
            return data
        }catch (error) {
            return rejectWithValue('Failed to fetch movies')
        }
    }
)

const allGenres = createAsyncThunk<IGenre[], void>(
    'moviesSlice/allGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            const {genres} = data
            return genres
        } catch (error) {
            return rejectWithValue('Failed to fetch genres')
        }
    }
)

const movieByGenre = createAsyncThunk<IMovie[], [string,number]>(
    'moviesSlice/movieByGenre',
    async ([genre_key, page], {rejectWithValue}) =>{
        try {
            const {data} = await movieService.getMoviesByGenre(genre_key, page);
            const {results} = data
            return results
        }catch (error) {
            return rejectWithValue('Failed to fetch genres')
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.movies = action.payload
        })
        .addCase(getMovieDetails.fulfilled, (state, action)=>{
            state.movieDetails = action.payload
        })
        .addCase(allGenres.fulfilled, (state, action)=>{
            state.genres = action.payload
        })
        .addCase(movieByGenre.fulfilled,(state, action)=>{
            state.moviesByGenre = action.payload
        })
        .addMatcher(isPending(getAll, allGenres, movieByGenre),(state, action)=>{
            state.loading = true
        })
        .addMatcher(isFulfilled(),(state, action)=>{
            state.loading = false
        })
    })


const {reducer: movieReducer, actions} = moviesSlice;

const movieActions = {
    ...actions,
    getAll,
    getMovieDetails,
    allGenres,
    movieByGenre,
}

export {
    movieActions,
    movieReducer
}