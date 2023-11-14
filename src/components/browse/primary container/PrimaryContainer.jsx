import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const PrimaryContainer = () => {
  const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  const [rand, setRand] = useState(0);
  // const [mainMovie,setMainMovie] = useState()
  useEffect(() => {
    setRand(Math.floor(Math.random() * (movies?.length - 0 + 1) + 0));
  }, [movies]);
  // const rand = (Math.floor(Math.random() * (movies?.length - 0 + 1) + 0));

  const mainMovie = movies?.[rand];

  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="min-h-[100vh] z-[5]  ">
      {mainMovie && (
        <VideoTitle
          original_title={mainMovie?.original_title}
          overview={mainMovie?.overview}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
      )}
      <VideoBackground id={mainMovie?.id} isMuted={isMuted} />
    </div>
  );
};

export default PrimaryContainer;
