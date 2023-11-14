import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMoviePoster = (id) => {
  const [img, setImg] = useState();
  const getMoviePoster = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/images`,
      API_OPTIONS
    );
    const json = await data.json();
    const images = json.backdrops.filter((e) => e.aspect_ratio == 1.778);
    setImg(images?.[0].file_path);
  };
  useEffect(() => {
    getMoviePoster();
  }, [id]);
  return img;
};

export default useMoviePoster;
