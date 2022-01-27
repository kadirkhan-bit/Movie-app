import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../common/movieApi";
import { APIkey } from "../common/movieApiKey";

export const fetchMovies = createAsyncThunk("fetchMovies", async () => {
  const movieText = "Harry";
  const response = await movieApi.get(
    `?apiKey=${APIkey}&s=${movieText}&type=movie`
  );
  return response.data;
});

export const fetchShows = createAsyncThunk("fetchShows", async () => {
  const seriesText = "Friends";
  const response = await movieApi.get(
    `?apiKey=${APIkey}&s=${seriesText}&type=series`
  );
  return response.data;
});

export const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    movies: {},
    shows: {},
  },
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("pending");
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched");
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchShows.fulfilled]: (state, { payload }) => {
      console.log("fetched");
      return { ...state, shows: payload };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
