import React from "react";
function VideoTitle({ original_title, overview, isMuted, setIsMuted }) {
  return (
    <div className="absolute  top-[35%] px-[2rem] z-[5] flex items-end">
      <div>
        <h1 className="text-4xl font-[600] ">{original_title}</h1>
        <p className="w-1/2 text-md my-3">
          {overview.length < 300 ? overview : `${overview.slice(0, 300)}...`}
        </p>
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
            <i className="ri-volume-mute-fill text-3xl p-2 rounded-[50%] border-[2px] border-white border-opacity-50 bg-white bg-opacity-50 hover:bg-opacity-30 outline-none "></i>
          </button>
        ) : (
          <button
            onClick={() => {
              setIsMuted(true);
            }}
          >
            <i className="ri-volume-up-fill text-3xl p-2 rounded-[50%] border-[2px] border-white border-opacity-50 bg-white bg-opacity-50 hover:bg-opacity-30 outline-none "></i>
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoTitle;
