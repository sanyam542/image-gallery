import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

export default function Banner(props) {
  useEffect(() => {
    setQuery(props.query);
  }, [props.query]);

  const [query, setQuery] = useState("");

  return (
    <>
      <div
        className="banner  h-96 text-white flex flex-col justify-center items-center bg-[center_bottom_-16rem] bg-cover sm:w-full  "
        style={{ backgroundImage: "url(./bg.jpg)" }}
      >
        <h1 className="text-5xl">Download High Quality Images by creators</h1>
        <p className=" text-gray-200  mt-4 mb-2 font-light">
          Over 2.4 milllion+ stock Images by talented community
        </p>
        <input
          type="text"
          className="h-12 w-3/6 rounded-lg p-4 pl-6 text-gray-500 font-sans font-light "
          placeholder="Search high resolution Images, categories, wallpapers"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className=" m-auto flex  transition-colors duration-500 dark:bg-neutral-800 ">
        <Card query={query} />
      </div>
    </>
  );
}
