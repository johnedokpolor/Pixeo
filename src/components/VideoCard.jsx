import React from "react";
import { Link } from "react-router-dom";
import { demoVideoUrl, demoChannelUrl } from "../utils/constants";
import { useContext } from "react";
import { Context } from "../context/Context";
import moment from "moment";

const VideoCard = ({ video, location }) => {
  const { extended, valueConverter, setLoading } = useContext(Context);
  const title = video?.snippet?.title.slice(0, 60);
  const title2 = title.split("&amp;").join("&");
  const title3 = title2.split("&#39;").join("'");
  const title4 = title3.split("&quot;").join('"');
  // console.log(video);
  return (
    <div className="flex flex-col items-center">
      <div
        className={
          location
            ? "w-[100vw] sm:w-[300px]"
            : extended
              ? "w-[100vw] sm:w-[260px]"
              : "w-[100vw] sm:w-[300px]"
        }
      >
        <Link
          onClick={() => setLoading(true)}
          to={
            video?.id?.videoId
              ? `/video/${video?.snippet?.channelId}/${video?.id?.videoId}`
              : demoVideoUrl
          }
        >
          <img
            className="h-auto w-[100%] rounded-none lg:rounded-xl"
            src={video?.snippet?.thumbnails?.medium?.url}
            alt={video?.snippet?.title}
          />
          <p className="mt-2 px-3 font-bold lg:px-0">{title4}...</p>
        </Link>
        <div className="w-[100%] px-3 lg:px-0">
          <Link
            onClick={() => setLoading(true)}
            to={
              video?.snippet?.channelId
                ? `/channel/${video?.snippet?.channelId}`
                : demoChannelUrl
            }
          >
            <p className="text-sm opacity-80">{video?.snippet?.channelTitle}</p>
          </Link>
          <p className="text-sm opacity-80">
            {video?.statistics?.viewCount &&
              `${valueConverter(video?.statistics.viewCount)} views &bull;`}{" "}
            {moment(video?.snippet?.publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
