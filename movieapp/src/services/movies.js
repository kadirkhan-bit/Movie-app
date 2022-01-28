import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../common/movieApi";
import { APIkey } from "../common/movieApiKey";

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (movieText) => {
    const response = await movieApi.get(
      `?apiKey=${APIkey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fetchShows = createAsyncThunk("fetchShows", async (seriesText) => {
  const response = await movieApi.get(
    `?apiKey=${APIkey}&s=${seriesText}&type=series`
  );
  return response.data;
});

export const fetchDetails = createAsyncThunk("fetchDetails", async (imdbID) => {
  const response = await movieApi.get(
    `?apiKey=${APIkey}&i=${imdbID}&Plot=full`
  );
  return response.data;
});

export const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    movies: {},
    shows: {},
    details: {},
    loading: true,
  },
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      console.log("pending");
      return { ...state, loading: true };
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      console.log("fetched");
      return { ...state, movies: payload, loading: false };
    },
    [fetchMovies.rejected]: (state) => {
      console.log("rejected");
      return { ...state, loading: true };
    },
    [fetchShows.pending]: (state, { payload }) => {
      console.log("pending");
      return { ...state, loading: true };
    },
    [fetchDetails.pending]: (state, { payload }) => {
      console.log("pending");
      return { ...state, loading: true };
    },
    [fetchShows.fulfilled]: (state, { payload }) => {
      console.log("fetched");
      return { ...state, shows: payload, loading: false };
    },
    [fetchDetails.fulfilled]: (state, { payload }) => {
      console.log("fetched");
      return { ...state, details: payload, loading: false };
    },
  },
});

export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;
