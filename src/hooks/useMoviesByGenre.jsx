import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
const useMoviesByGenre = (genre) => {
  console.log(genre);
  const getMoviesByGenre = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/collection?query=${genre}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json;
  };
  useEffect(() => {
    getMoviesByGenre();
  }, []);
  console.log(genre);
};

export default useMoviesByGenre;
