import React from "react";
import { IMG_CDN } from "../../../utils/constants";
import useMoviePoster from "../../../hooks/useMoviePoster";
const MoviesCard = ({ movie }) => {
  const { id } = movie;
  const path = useMoviePoster(id);
  return !path ? (
    <>
      <div className="w-[225px] h-[126px] gradient-background"></div>
    </>
  ) : (
    <div
      className="w-[225px] bg-pink-300"
      // onMouseEnter={(e) => {
      //   console.log(e);
      //   console.log("mouse entered");
      // }}
      // onMouseLeave={(e) => {
      //   console.log(e);
      //   console.log("mouse left");
      // }}
    >
      <img src={IMG_CDN + path} className=" rounded-md" />
    </div>
  );
};

export default MoviesCard;
