import React, { useEffect } from "react";
import Header from "../header/Header";
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies";
import PrimaryContainer from "./primary container/primaryContainer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SecondaryContainer from "./secondary container/SecondaryContainer";
import useMovieGenres from "../../hooks/useMovieGenres";

const Browse = () => {
  const isSignedIn = useSelector((state) => state.user);
  const navigator = useNavigate();
  useNowPlayingMovies();
  useMovieGenres();

  return !isSignedIn ? (
    <>{navigator("/")}</>
  ) : (
    <div className="w-full min-h-[100vh] bg-secondary text-white ">
      <Header signIn={true} style={"px-[2rem] z-20 "} />
      <PrimaryContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
