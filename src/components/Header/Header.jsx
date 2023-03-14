import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";

import Banner from "../Banner/Banner";

function Header(props) {
  const [query, setQuery] = useState("");

  function submitForm(e) {
    e.preventDefault();
  }

  //dark mode
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme);
  };

  return (
    <>
      <div className="   dark:bg-neutral-800 px-16 ">
        <div className=" flex justify-between items-center py-8 ">
          <h1
            onClick={() => window.location.reload()}
            className="text-3xl font-mono	cursor-pointer dark:text-white"
          >
            Image Gallery
          </h1>
          <form action="" onSubmit={submitForm}>
            <input
              className="h-9 w-96 border-2  border-gray-300 rounded-md p-2 font-sans font-light "
              placeholder="Search your Images here"
              onChange={(e) => setQuery(e.target.value)}
              type="text"
            />
          </form>
          <h3 className="cursor-pointer dark:text-white">Exploration</h3>
          <h3 className="cursor-pointer dark:text-white">Collection</h3>
          <h3 className="cursor-pointer dark:text-white">Community</h3>
          <div className="switch flex items-center dark:text-white">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
            <ReactSwitch
              onChange={handleThemeSwitch}
              checked={theme === "dark"}
            />
          </div>
        </div>
      </div>
      <Banner query={query} />

      {/* <Card className="card" query={query} /> */}
    </>
  );
}

export default Header;
