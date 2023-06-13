import React from "react";
import ButtonDarkstyle from "./ButtonDark.module.css";

function ButtonDark(props) {
  return (
    <button
      style={props.style}
      className={props.size === "small" ? ButtonDarkstyle.btnSmall : ButtonDarkstyle.btn}
      onClick={props.handleClick}
      
    >
      {props.text}
    </button>
  );
}

export default ButtonDark;
