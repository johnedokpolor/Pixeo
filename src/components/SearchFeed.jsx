import React, { useEffect, useContext, useState } from "react";
import Videos from "./Videos";
import { fetchFromRAAPI } from "../utils/fetchFromAPI";
import { Context } from "../context/Context";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  const { setLoading } = useContext(Context);
  useEffect(() => {
    console.log("Fetching...");
    fetchFromRAAPI(
      `search?q=${searchTerm}&part=snippet,id&order=viewCount`,
    ).then((data) => {
      setLoading(false);
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
    <div className="mt-28 lg:mt-20">
      <div className="flex-1 px-5 pt-3">
        <Videos videos={videos} />
        <p className="pb-2 text-center font-bold">
          {" "}
          &copy;2024 - {new Date().getFullYear()} Made with 💓 by GLtech
        </p>
      </div>
    </div>
  );
};

export default SearchFeed;
