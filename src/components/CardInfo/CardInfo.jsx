import React from "react";
// import "./cardInfo.css";
export default function CardInfo(props) {
  return (
    <>
      <ul className="info flex justify-around p-3 rounded-b-xl border-x-2 border-b-2 border-slate-150">
        <li>
          <img
            className="rounded-full w-12 "
            src={props.value.user.profile_image.large}
            alt=""
          ></img>
        </li>
        <ul>
          <li>{props.value.user.name}</li>
          <li className="italic text-gray-500 font-thin ">
            {props.value.user.instagram_username}
          </li>
        </ul>
        <li>{props.value.likes}</li>
      </ul>
    </>
  );
}
