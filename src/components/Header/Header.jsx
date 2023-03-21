import React, { useEffect, useState, useContext } from "react";
import ReactSwitch from "react-switch";

import MenuIcon from "@mui/icons-material/Menu";
import { Context } from "../context/Context";

function Header(props) {
  const [open, setOpen] = useState(false);
  const queryContext = useContext(Context);

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
  };

  return (
    <>
      <div className="  transition-colors duration-500 bg-white dark:bg-neutral-800 sm:px-16 sticky top-0 w-full ">
        <div className=" flex justify-between items-center sm:py-8  py-6 max-w-[85%] m-auto  ">
          <h1
            onClick={() => window.location.reload()}
            className="sm:text-3xl font-mono	cursor-pointer dark:text-white"
          >
            Image Gallery
          </h1>
          <form action="">
            <input
              className="sm:h-9 sm:w-96 border-2  hidden sm:inline-block border-gray-300 rounded-md p-2 font-sans font-light "
              placeholder="Search your Images here"
              onChange={(e) => queryContext.setKeyword(e.target.value)}
              type="text"
            />
          </form>
          <div className=" sm:hidden">
            <MenuIcon
              className="dark:text-white text-black  "
              onClick={() => setOpen(!open)}
            />
          </div>

          {open ? <></> : null}

          <ul
            className={`sm:flex absolute ${
              open ? "top-20 " : "top-[-490px]"
            } dark:bg-neutral-600 w-[85%] p-12 transition-all duration-300 ease-in rounded-md  bg-neutral-200`}
          >
            <h3 className="cursor-pointer dark:text-white sm:inline my-7 hover:text-black duration-500">
              Exploration
            </h3>
            <h3 className="cursor-pointer dark:text-white sm:inline my-7 ">
              Collection
            </h3>
            <h3 className="cursor-pointer dark:text-white sm:inline my-7">
              Community
            </h3>
            <div className="switch flex items-center dark:text-white ">
              <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
              <ReactSwitch
                onChange={handleThemeSwitch}
                checked={theme === "dark"}
              />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
