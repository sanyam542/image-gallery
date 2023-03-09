import React, { useEffect, useState } from "react";
import Image from "../Image/Image";
import CardInfo from "../CardInfo/CardInfo";

import Axios from "axios";
// import AppContext from "../Header/Header";

export default function Card(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const response = async () =>
      await Axios.get(
        `https://api.unsplash.com/photos?page=1&client_id=uGEddsQYJLPjLlRYE-6s_YlHTP5c3OKab_cX_B4RNpU`
      ).then((res) => {
        let results = res.data.results;
        setData(results);
      });
    response();
  }, []);

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

  return (
    <div className="mt-16 mx-24 ">
      {data.length == 0 ? (
        <h1 className="text-gray-300 text-4xl">
          No Images Found, Try another keyword
        </h1>
      ) : (
        data.map((value, index) => {
          return (
            <ul
              className=" 
            m-4  flex flex-col"
              style={{ display: "inline-block" }}
            >
              <li className="" style={{ display: "inline-block" }}>
                <Image url={value.urls.small} key={index} />
              </li>

              <li>
                <CardInfo value={value} />
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
}
