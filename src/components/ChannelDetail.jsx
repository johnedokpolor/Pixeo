import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { fetchFromRAAPI, fetchFromYTAPI } from "../utils/fetchFromAPI";
import { Context } from "../context/Context";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState();
  const { setCategoriesArray, setResponse, response, loading, setLoading } =
    useContext(Context);
  console.log(channelDetails);

  const BgStyle = {
    background:
      "linear-gradient(90deg, rgba(82,200,250,1) 0%, rgba(29,51,72,1) 100%)",
    backgroundRepeat: "no-repeat",
    backgroundPostion: "center",
    backgroundSize: "cover",
  };

  console.log(channelDetails?.brandingSettings?.image?.bannerExternalUrl);
  useEffect(() => {
    fetchFromYTAPI(`channels?part=snippet,statistics&id=${id}`).then(
      (data) => setChannelDetails(data.items[0]),
      setCategoriesArray((prev) =>
        prev.map((item) => ({ ...item, selected: false })),
      ),
    );
    fetchFromRAAPI(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => {
        setResponse(data);
        setLoading(false);
        setVideos(data.items);
      },
    );
  }, [id]);

  return (
    <div className="mt-20 flex flex-1 flex-col items-center lg:mt-16">
      <div style={BgStyle} className="w-full py-28" alt=""></div>

      <ChannelCard channelDetail={channelDetails} />
      <Videos videos={videos} />
      {response === 403 && (
        <div className="mb-4 w-full bg-black/10 py-3 text-center text-lg font-bold">
          {" "}
          LIMIT EXCEEDED TRY AGAIN IN 24HOURS
        </div>
      )}
      <p className="pb-2 text-center font-bold">
        {" "}
        &copy;2024 - {new Date().getFullYear()} Made with 💓 by GLtech
      </p>
    </div>
  );
};

export default ChannelDetail;
