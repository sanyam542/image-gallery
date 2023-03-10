import React, { useState } from "react";

import Banner from "../Banner/Banner";

function Header(props) {
  const [query, setQuery] = useState("");

  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className=" mx-16 ">
        <div className=" flex justify-between items-center py-8 ">
          <h1
            onClick={() => window.location.reload()}
            className="text-3xl font-mono	cursor-pointer"
          >
            Image Gallery
          </h1>
          <form action="" onSubmit={submitForm}>
            <input
              className="h-9 w-96 border-2  border-gray-300 rounded-md p-2 "
              placeholder="Search your Images here"
              onChange={(e) => setQuery(e.target.value)}
              type="text"
            />
          </form>
          <h3 className="cursor-pointer">Exploration</h3>
          <h3 className="cursor-pointer">Collection</h3>
          <h3 className="cursor-pointer">Community</h3>
          <div className=" flex">
            <h3>Dark Mode</h3>
            <label className="switch">
              <input className="" type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
      <Banner query={query} />

      {/* <Card className="card" query={query} /> */}
    </>
  );
}

export default Header;
