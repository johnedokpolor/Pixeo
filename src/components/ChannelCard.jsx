import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { Context } from "../context/Context";

const ChannelCard = ({ channelDetail }) => {
  const { subConverter, loading } = useContext(Context);
  console.log(loading);
  return (
    <div className="-translate-y-16 text-center">
      <Link to={`/channel/${channelDetail?.id}`}>
        <img
          className="h-[150px] w-[150px] rounded-full"
          src={
            channelDetail?.snippet?.thumbnails?.medium?.url ||
            demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
        />

        <p className="text-base font-semibold opacity-80">
          {channelDetail?.snippet?.title}
        </p>
        <p className="text-sm font-semibold opacity-80">
          {subConverter(channelDetail?.statistics?.subscriberCount)} subscribers
        </p>
      </Link>
    </div>
  );
};

export default ChannelCard;
