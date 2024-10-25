import React, { useState, useContext } from "react";
import VideoCard from "./VideoCard";
import { Context } from "../context/Context";

import VideoCardSkeleton from "./VideoCardSkeleton";

const Videos = ({ videos, location }) => {
  const { extended, loading } = useContext(Context);
  console.log(videos);

  return (
    <div className="">
      <div
        className={
          location
            ? "grid gap-4 sm:grid-cols-2 lg:flex lg:flex-col"
            : extended
              ? "videos lg:ml-[150px]"
              : "videos lg:ml-[60px]"
        }
      >
        {loading && <VideoCardSkeleton cards={8} location={location} />}
        {videos?.map((item, idx) => {
          return (
            <div key={idx} className="">
              {!loading && <VideoCard video={item} location={location} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
