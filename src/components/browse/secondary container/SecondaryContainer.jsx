import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import useDiscoverMovies from "../../../hooks/useDiscoverMovies";
import useTopRatedMOvies from "../../../hooks/useDiscoverMovies";
import usePopularMovies from "../../../hooks/useDiscoverMovies";
const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);
  const genres = useSelector((state) => state.movies.movieGenres);
  const a = usePopularMovies();
  const b = useTopRatedMOvies();
  return (
    <>
      <div className="main  min-h-[100vh] px-[2rem] relative z-[20] ">
        <div className="-my-[7rem]">
          <MoviesList
            title={"Now Playing Movies"}
            movies={movies.nowPlayingMovies}
          />
          {/* <MoviesList title={"Popular Movies"} movies={a} /> */}
          {/* <MoviesList title={"Top Rated Movies"} movies={b} /> */}
          {/* {console.log(useDiscoverMovies(28))} */}

          {/* {genres?.map((genre) => {
            return (
              <MoviesList
                title={genre.name}
                // movies={useDiscoverMovies(genre.id)}
                genreId={genre.id}
              />
            );
            // console.log(genre.name);
          })} */}
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
