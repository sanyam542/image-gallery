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
      <div className="  transition-colors duration-500 bg-white dark:bg-neutral-800 sticky top-0 w-full ">
        <div className=" flex justify-between items-center sm:py-2   py-6 w-[85%] m-auto  ">
          <h1
            onClick={() => window.location.reload()}
            className="sm:text-3xl font-mono	cursor-pointer dark:text-white flex items-center"
          >
            <h1 className=" font-img text-red-600 sm:text-5xl text-2xl ">
              Image{" "}
            </h1>
            Gallery
          </h1>
          <form action="">
            <input
              className="sm:h-9 xl:w-96 lg:w-84 border-2  hidden lg:inline-block border-gray-300 rounded-md px-6 font-sans font-light text-xs "
              placeholder="Search your Images here"
              onChange={(e) => queryContext.setKeyword(e.target.value)}
              type="text"
            />
          </form>
          <div className=" lg:hidden">
            <MenuIcon
              className="dark:text-white text-black  "
              onClick={() => setOpen(!open)}
            />
          </div>

          {open ? <></> : null}

          <ul
            className={`lg:flex lg:static lg:items-center  dark:sm:bg-neutral-800 sm:p-0 md:w-[80%] lg:w-[50%] xl:w-[40%] 2xl:w-[20%]  absolute ${
              open ? "top-20 " : "top-[-490px]"
            } dark:bg-neutral-600 w-[85%]  p-12 transition-all duration-300 ease-in rounded-md  lg:bg-white bg-neutral-200`}
          >
            <h3 className="cursor-pointer dark:text-white lg:inline my-7 mx-2 hover:text-black duration-500">
              Exploration
            </h3>
            <h3 className="cursor-pointer dark:text-white lg:inline my-7 mx-2 ">
              Collection
            </h3>
            <h3 className="cursor-pointer dark:text-white lg:inline my-7 mx-2">
              Community
            </h3>
            <div className="switch flex items-center dark:text-white my-7 mx-2 lg:w-2 ">
              <label className="lg:text-xs">
                {" "}
                {theme === "light" ? "Light Mode" : "Dark Mode"}
              </label>
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
