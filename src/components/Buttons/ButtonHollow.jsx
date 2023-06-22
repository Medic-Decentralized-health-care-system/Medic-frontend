import React from "react";
import { ReactDOM } from "react-dom";
import ButtonHollowstyle from "./ButtonHollow.module.css";

function ButtonHollow(props) {
  // const styleObj = {};
  return props.type === "white" ? (
    <button
      style={props.style}
      className={ButtonHollowstyle.basicButtonwhite}
      onClick={props.ClickFunction}
    >
      {props.text}
    </button>
  ) : (
    <button
      style={props.style}
      className={ButtonHollowstyle.basicButtonprimary}
      onClick={props.ClickFunction}
    >
      {props.text}
    </button>
  );
}

export default ButtonHollow;
