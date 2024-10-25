import React, { useEffect, useContext, useState } from "react";
import Videos from "./Videos";
import { fetchFromRAAPI } from "../utils/fetchFromAPI";
import { Context } from "../context/Context";
const Feed = () => {
  const { selectedCategory, response, setResponse, setLoading } =
    useContext(Context);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    console.log("Fetching...");
    fetchFromRAAPI(
      `search?q=${selectedCategory}&part=snippet,id&order=viewCount`,
    ).then((data) => {
      setResponse(data);
      console.log(data);
      setLoading(false);

      const shuffleArr = data?.items?.sort(() => Math.random() - 0.5);
      setVideos(shuffleArr);
    });
  }, [selectedCategory]);
  return (
    <div className="mt-32 flex-1 lg:mt-16">
      <div className="flex-1 pt-3 lg:px-5">
        <Videos videos={videos} />
      </div>
      {response === 403 && (
        <div className="w-full bg-black/10 py-3 text-center text-lg font-bold dark:bg-white/10">
          {" "}
          LIMIT EXCEEDED TRY AGAIN IN 24HOURS
        </div>
      )}
      ,
      <p className="pb-2 text-center font-bold">
        &copy;2024 - {new Date().getFullYear()} Made with 💓 by GLtech
      </p>
    </div>
  );
};

export default Feed;
