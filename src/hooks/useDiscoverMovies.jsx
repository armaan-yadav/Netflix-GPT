import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useDiscoverMovies = (genreId) => {
  const [movies, setMovies] = useState();
  const getMoviesByGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&with_genres=${genreId}`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovies(json);
    console.log(json);
  };
  useEffect(() => {
    getMoviesByGenre();
  }, []);
  console.log(movies);
  return movies;
};

export default useDiscoverMovies;
