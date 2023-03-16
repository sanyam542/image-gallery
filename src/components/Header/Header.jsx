import React, { useEffect, useState } from "react";
import ReactSwitch from "react-switch";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import Banner from "../Banner/Banner";

function Header(props) {
  const [query, setQuery] = useState("");

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
      <div className="  transition-colors duration-500  dark:bg-neutral-800 sm:px-16 ">
        <div className=" flex justify-between items-center sm:py-8  py-6 max-w-[85%] m-auto  ">
          <h1
            onClick={() => window.location.reload()}
            className="sm:text-3xl font-mono	cursor-pointer dark:text-white"
          >
            Image Gallery
          </h1>
          <form action="">
            <input
              className="sm:h-9 sm:w-96 border-2  hidden border-gray-300 rounded-md p-2 font-sans font-light "
              placeholder="Search your Images here"
              onChange={(e) => setQuery(e.target.value)}
              type="text"
            />
          </form>
          <MenuIcon className="text-white" />
          <h3 className="cursor-pointer dark:text-white hidden">Exploration</h3>
          <h3 className="cursor-pointer dark:text-white hidden">Collection</h3>
          <h3 className="cursor-pointer dark:text-white hidden">Community</h3>
          <div className="switch sm:flex items-center dark:text-white hidden">
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
