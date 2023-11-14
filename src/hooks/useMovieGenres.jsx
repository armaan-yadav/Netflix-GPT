import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieGenres } from "../utils/moviesSlice";
const useMovieGenres = () => {
  const dispatch = useDispatch();
  const getMovieGenres = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?language=en`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieGenres(json.genres));
  };

  useEffect(() => {
    getMovieGenres();
  });
};

export default useMovieGenres;
