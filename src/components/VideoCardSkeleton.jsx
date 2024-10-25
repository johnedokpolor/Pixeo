import React, { useContext } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Context } from "../context/Context";

const VideoCardSkeleton = ({ cards }) => {
  const cardsArray = Array(cards).fill("card");
  const { dark } = useContext(Context);
  console.log(cardsArray);
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      {cardsArray.map((card, i) => (
        <div
          key={i}
          className={
            location
              ? "w-[100vw] sm:w-[300px]"
              : extended
                ? "w-[100vw] sm:w-[260px]"
                : "w-[100vw] sm:w-[300px]"
          }
        >
          <div>
            <div className="w-[100%] rounded-xl">
              <SkeletonTheme
                baseColor={dark ? "#202020" : ""}
                highlightColor={dark ? "#444" : ""}
              >
                <Skeleton className="h-[200px] lg:h-[170px]" />
              </SkeletonTheme>
            </div>
            <p className="mt-2 px-3 font-bold lg:px-0">
              <SkeletonTheme
                baseColor={dark ? "#202020" : ""}
                highlightColor={dark ? "#444" : ""}
              >
                <Skeleton className="" />
              </SkeletonTheme>
            </p>
          </div>
          <div className="h-[50px] w-[100%] px-3 lg:px-0">
            <p className="text-sm opacity-80">
              <SkeletonTheme
                baseColor={dark ? "#202020" : ""}
                highlightColor={dark ? "#444" : ""}
              >
                <Skeleton />
              </SkeletonTheme>
            </p>

            <p className="text-sm opacity-80">
              <SkeletonTheme
                baseColor={dark ? "#202020" : ""}
                highlightColor={dark ? "#444" : ""}
              >
                <Skeleton />
              </SkeletonTheme>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCardSkeleton;
