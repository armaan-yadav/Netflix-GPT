import React, { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovieDetails from "../../../hooks/useMovieDetails";

const PrimaryContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  const mainMovie = movies?.[5];

  const [isMuted, setIsMuted] = useState(true);
  // useMovieDetails(mainMovie?.id);

  return (
    <div className=" h-[100vh]  relative z-[10]">
      <VideoTitle
        original_title={mainMovie?.original_title}
        overview={mainMovie?.overview}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
      />
      <VideoBackground id={mainMovie?.id} isMuted={isMuted} />
    </div>
  );
};

export default PrimaryContainer;
