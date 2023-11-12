import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const temp = json.results.filter((e) => e.type == "Trailer" || "Teaser");
    const trailer = temp.length ? temp[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, [id]);
};

export default useMovieDetails;
