import React from "react";
import ButtonDarkstyle from "./ButtonDark.module.css";

function ButtonDark({ style, size, ClickFunction, text }) {
  return (
    <button
      style={style}
      className={
        size === "small" ? ButtonDarkstyle.btnSmall : ButtonDarkstyle.btn
      }
      onClick={ClickFunction}
    >
      {text}
    </button>
  );
}

export default ButtonDark;
