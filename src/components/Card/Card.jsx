import React, { useEffect, useState } from "react";
import Image from "../Image/Image";
import CardInfo from "../CardInfo/CardInfo";

import Axios from "axios";
import Popup from "../Popup";
// import AppContext from "../Header/Header";

export default function Card(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    const response = async () =>
      await Axios.get(
        `https://api.unsplash.com/photos?page=1&per_page=30&client_id=uGEddsQYJLPjLlRYE-6s_YlHTP5c3OKab_cX_B4RNpU`
      ).then((res) => {
        let results = res.data;

        setData(results);
        setLoading(false);
      });
    response();
  }, [loading]);

  useEffect(() => {
    let value = props.query;
    const response = async () =>
      await Axios.get(
        `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=uGEddsQYJLPjLlRYE-6s_YlHTP5c3OKab_cX_B4RNpU`
      ).then((res) => {
        let results = res.data.results;
        setData(results);
      });

    response();
  }, [props.query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  function handlePopup(info) {
    setPopup(info);
  }
  return (
    <div className="transition-colors duration-500  dark:bg-neutral-800 ">
      <div className="  sm:columns-3 columns-2 pt-2 w-[85%] m-auto  ">
        {data.length === 0 ? (
          <h1 className="text-gray-300 text-4xl ">
            No Images Found, Try another keyword or go to
            <a href="/" className=" ">
              {" "}
              home
            </a>
          </h1>
        ) : (
          data.map((value, index) => {
            return (
              <>
                {popup !== null ? (
                  <Popup
                    className=""
                    value={popup}
                    onClose={() => setPopup(null)}
                  />
                ) : null}
                <ul
                  className=" 
            sm:m- my-2  dark:text-white inline-block cursor-pointer  max-w-[100%]   "
                  onClick={() => handlePopup(value)}
                >
                  <li className="inline-block">
                    <Image url={value.urls.small} key={index} />
                  </li>

                  <li>
                    <CardInfo value={value} />
                  </li>
                </ul>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}
