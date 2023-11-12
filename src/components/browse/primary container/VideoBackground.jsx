import React, { useEffect } from "react";
import useMovieDetails from "../../../hooks/useMovieDetails";
import { useSelector, useDispatch } from "react-redux";
import { API_OPTIONS, YT_LINK } from "../../../utils/constants";
import ReactPlayer from "react-player";
import { addTrailerVideo } from "../../../utils/moviesSlice";

const VideoBackground = ({ id, isMuted }) => {
  useMovieDetails(id);
  const trailer = useSelector((state) => state?.movies?.trailerVideo);
  // console.log(trailer);
  return (
    <div className="h-[100vh] w-full overflow-hidden z-[5] pointer-events-none">
      <ReactPlayer
        url={YT_LINK + trailer?.key}
        width={"100%"}
        height={"100%"}
        playing={true}
        volume={1}
        muted={isMuted}
        loop={true}
        className={"scale-[1.2]"}
      />
    </div>
  );
};

export default VideoBackground;
