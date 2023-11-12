import React, { useEffect } from "react";
import Header from "../header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import PrimaryContainer from "./primary container/primaryContainer";
import useMovieDetails from "../../hooks/useMovieDetails";
const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="w-full min-h-[100vh] bg-secondary text-white ">
      <Header signIn={true} style={"px-[5rem] z-20 bg-black"} />
      <PrimaryContainer />
    </div>
  );
};

export default Browse;
