import React from "react";

export default function Image(props) {
  return (
    <>
      <img className="rounded-t-xl object-cover" src={props.url} alt="error" />
    </>
  );
}
