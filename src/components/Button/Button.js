import React from "react";
import "./Button.scss";

export default function Button(props) {
  return (
    <button className="button" onClick={props.onClick}>
      {/* <img src={props.icon} alt="button" /> */}
      {props.name}
    </button>
  );
}
