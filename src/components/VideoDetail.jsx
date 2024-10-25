import React, { useEffect, useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromRAAPI, fetchFromYTAPI } from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";
import { Context } from "../context/Context";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { TfiDownload } from "react-icons/tfi";
import { BsThreeDots } from "react-icons/bs";
import moment from "moment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const VideoDetail = () => {
  const [videoDetails, setVideoDetails] = useState();
  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState();
  const {
    setCategoriesArray,
    valueConverter,
    subConverter,
    setResponse,
    response,
    setLoading,
    dark,
  } = useContext(Context);
  console.log(videoDetails);
  console.log(videos);
  console.log(channelDetails);

  const { id, cid } = useParams();
  useEffect(() => {
    console.log("fetching");
    fetchFromYTAPI(
      `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}`,
    ).then((data) => {
      setVideoDetails(data.items[0]),
        setCategoriesArray((prev) =>
          prev.map((item) => ({ ...item, selected: false })),
        );
    });
    fetchFromRAAPI(`search?part=snippet&channelId=${cid}&order=viewCount`).then(
      (data) => {
        const shuffleArr = data.items.sort(() => Math.random() - 0.5);
        setResponse(data);
        setVideos(shuffleArr);
        setLoading(false);
      },
    );

    fetchFromYTAPI(`channels?part=snippet,statistics&id=${cid}`).then(
      (data) => {
        setChannelDetails(data?.items[0]);
      },
    );
  }, [id]);
  return (
    <div className="w-screen gap-5 pt-32 lg:ml-[65px] lg:flex lg:h-screen lg:justify-between lg:px-5 lg:pt-20">
      <div className="mb-5 flex-1">
        <div className="h-[250px] sm:h-[300px] md:h-[400px] lg:h-[430px]">
          <ReactPlayer
            className="react-player"
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
          />
        </div>

        <p className="mt-1 px-3 text-xl font-bold lg:px-0">
          {videoDetails?.snippet?.title.slice(0, 60)}
          {videoDetails && <span>...</span>}
        </p>
        <p className="px-3 text-sm lg:px-0">
          {valueConverter(videoDetails?.statistics?.viewCount) || (
            <SkeletonTheme
              baseColor={dark ? "#202020" : ""}
              highlightColor={dark ? "#444" : ""}
            >
              <Skeleton />
            </SkeletonTheme>
          )}{" "}
          {videoDetails && <span>views &bull;</span>}{" "}
          {videoDetails && (
            <span>{moment(videoDetails?.snippet?.publishedAt).fromNow()}</span>
          )}
        </p>
        <div className="mt-2 flex-wrap items-center justify-between px-3 md:flex lg:px-0">
          <div className="mb-3 flex items-center justify-between gap-4">
            {
              <Link className="flex items-center gap-3" to={`/channel/${cid}`}>
                <div className="w-7 rounded-full lg:w-10">
                  {channelDetails ? (
                    <img
                      className="h-7 w-7 rounded-full lg:h-10 lg:w-10"
                      src={channelDetails?.snippet?.thumbnails?.medium?.url}
                      alt={channelDetails?.snippet?.title}
                    />
                  ) : (
                    <SkeletonTheme
                      baseColor={dark ? "#202020" : ""}
                      highlightColor={dark ? "#444" : ""}
                    >
                      <Skeleton circle width={40} height={40} />
                    </SkeletonTheme>
                  )}
                </div>
                <div className="flex items-center gap-2 lg:flex-col lg:items-start lg:gap-0">
                  <p className="text-sm font-bold lg:text-base">
                    {channelDetails?.snippet?.title}
                  </p>
                  <p className="flex gap-1 text-sm opacity-90">
                    {subConverter(
                      channelDetails?.statistics?.subscriberCount,
                    ) || <Skeleton />}{" "}
                    {channelDetails && (
                      <span className="hidden lg:flex">subscribers</span>
                    )}
                  </p>
                </div>
              </Link>
            }
            <div className="flex h-8 items-center rounded-full bg-black px-3 text-sm font-bold text-white dark:bg-white dark:text-black lg:h-9 lg:cursor-pointer lg:px-4 lg:text-base">
              Subscribe
            </div>
          </div>
          <div className="flex w-full justify-between gap-2 overflow-x-scroll pb-3 lg:w-[460px] lg:overflow-hidden lg:pb-0">
            <div className="flex h-8 items-center gap-3 rounded-full bg-black/10 px-3 dark:bg-white/10 lg:h-9 lg:px-5">
              <div className="flex items-center gap-2 border-r border-gray-400 pr-3">
                <BiLike className="lg:text-xl" />
                <p className="text-sm font-semibold lg:text-base">
                  {valueConverter(videoDetails?.statistics?.likeCount)}
                </p>
              </div>
              <div>
                <BiDislike className="lg:text-xl" />
              </div>
            </div>
            <div className="flex h-8 items-center gap-2 rounded-full bg-black/10 px-3 dark:bg-white/10 lg:h-9 lg:px-5">
              <PiShareFatLight className="lg:text-xl" />
              <p className="text-sm font-semibold lg:text-base">Share</p>
            </div>
            <div className="flex h-8 items-center gap-2 rounded-full bg-black/10 px-3 dark:bg-white/10 lg:h-9 lg:px-5">
              <TfiDownload className="lg:text-base" />
              <p className="text-sm font-semibold lg:text-base">Download</p>
            </div>
            <div className="flex h-8 items-center justify-center rounded-full bg-black/10 px-2 dark:bg-white/10 lg:h-9 lg:w-9 lg:px-0">
              <BsThreeDots className="font-semi-bold flex text-xl" />
            </div>
          </div>
        </div>
      </div>

      {videos && (
        <div className="scroll lg:h-screen lg:overflow-y-scroll">
          <Videos videos={videos} location="detail" />
        </div>
      )}

      {response === 403 && (
        <div className="mb-4 w-full bg-black/10 py-3 text-center text-lg font-bold">
          {" "}
          LIMIT EXCEEDED TRY AGAIN IN 24HOURS
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
