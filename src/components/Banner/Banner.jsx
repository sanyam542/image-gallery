import React, { useContext } from "react";
import { Context } from "../context/Context";

export default function Banner() {
  const queryContext = useContext(Context);

  return (
    <>
      <div
        className="  sm:h-96 text-white flex flex-col justify-center items-center bg-[center_bottom_-16rem] bg-cover sm:w-full text-center p-4   "
        style={{ backgroundImage: "url(./bg.jpg)" }}
      >
        <h1 className="sm:text-5xl">
          Download High Quality Images by creators
        </h1>
        <p className=" text-gray-200  mt-4 mb-2 font-light text-xs">
          Over 2.4 milllion+ stock Images by talented community
        </p>
        <input
          type="text"
          className="sm:h-12 sm:w-3/6 h-4 rounded-lg p-4 pl-6 text-gray-500 font-sans font-light text-xs"
          placeholder="Search high resolution Images, categories, wallpapers"
          onChange={(e) => queryContext.setKeyword(e.target.value)}
        />
      </div>
    </>
  );
}
