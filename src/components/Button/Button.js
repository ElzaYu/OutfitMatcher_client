import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <button className="button">
      <img src={props.icon} />
      {props.name}
    </button>
  );
}
