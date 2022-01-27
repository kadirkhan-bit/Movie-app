import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "Movie",
  initialState: {
    movies: {},
  },
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
