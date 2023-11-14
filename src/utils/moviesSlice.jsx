import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    movieGenres: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addMovieGenres: (state, action) => {
      state.movieGenres = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addMovieGenres } =
  moviesSlice.actions;
export default moviesSlice.reducer;
