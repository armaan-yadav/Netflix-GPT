import React from "react";
function VideoTitle({ original_title, overview, isMuted, setIsMuted }) {
  return (
    <div className="absolute  top-[40%] px-[5rem] z-[9] flex items-end">
      <div>
        <h1 className="text-4xl font-[600] ">{original_title}</h1>
        <p className="w-1/2 text-md my-3">{overview}</p>
        <div className="flex gap-4 ">
          <button className="bg-white text-black px-8 py-1 text-lg font-[500] rounded-md flex items-center gap-2 bg-opacity-80  hover:bg-opacity-100">
            <i className="ri-play-fill text-2xl"></i> Play
          </button>
          <button className="bg-white  px-8 py-1 text-lg font-[500] rounded-md flex items-center gap-2 bg-opacity-50 hover:bg-opacity-30 text-white">
            <i className="ri-information-line text-2xl"></i> More Info
          </button>
        </div>
      </div>
      <div className=" h-fit ">
        {isMuted ? (
          <button
            onClick={() => {
              setIsMuted(false);
            }}
          >
            <i className="ri-volume-mute-fill text-3xl p-2 rounded-[50%] border-[2px] border-white border-opacity-50 bg-white bg-opacity-50 hover:bg-opacity-30"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              setIsMuted(true);
            }}
          >
            <i className="ri-volume-up-fill text-3xl p-2 rounded-[50%] border-[2px] border-white border-opacity-50 bg-white bg-opacity-50 hover:bg-opacity-30"></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoTitle;
