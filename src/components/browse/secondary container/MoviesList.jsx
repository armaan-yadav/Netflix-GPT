import React from "react";
import MoviesCard from "./MoviesCard";
import Carousel from "nuka-carousel";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="mb-5 z-[20]">
      <h1 className="text-2xl font-[500] mb-5 z-[20]">{title}</h1>
      <Carousel
        slidesToShow={5}
        dragging={false}
        wrapAround={true}
        defaultControlsConfig={{
          nextButtonText: ">",
          prevButtonText: "<",
          containerClassName: "container",
          nextButtonClassName: "next-btn bg-red-300",
          prevButtonClassName: "prev-btn",
          pagingDotsClassName: "dots",
          nextButtonOnClick: () => {
            console.log("next");
          },
        }}
      >
        {movies?.map((e) => {
          return (
            <div className="h-fit" key={e.id}>
              <MoviesCard movie={e} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MoviesList;
