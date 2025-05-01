import { tr } from "date-fns/locale";
import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center bg-base-200 lg:gap-4 p-2 lg:p-4 my-7">
      <p className="text-white px-4 py-1 lg:py-3 bg-secondary">Latest</p>
      <Marquee className="flex gap-3 lg:gap-5 text-red-400" pauseOnHover={true} speed={60}>
        <p className="font-semibold ml-5">
         " India and Pakistan Edge Closer to Military Conflict Over Kashmir"
        </p>
        <p className="font-semibold ml-5">
         " Iran to Hold Talks with European Powers Ahead of U.S. Nuclear
          Negotiations"
        </p>
        <p className="font-semibold ml-5">
         " Clashes Near Damascus Result in Multiple Fatalities"
        </p>
        <p className="font-semibold ml-5">
         " Vietnam Marks 50 Years Since End of War with Nationwide Celebrations"
        </p>
        <p className="font-semibold ml-5">
         " Massive Blackout Hits Iberian Peninsula, Leaves Millions Without Power"
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
