import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const useTopRatedMOvies = () => {
  const [results, setResults] = useState();
  const getTopRatedMOvies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    // dispatch(addNowPlayingMovies(json.results));
    setResults(json.results);
  };

  useEffect(() => {
    getTopRatedMOvies();
  }, []);
  return results;
};

export default useTopRatedMOvies;
