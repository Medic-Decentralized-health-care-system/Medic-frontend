import React from "react";
import { ReactDOM } from "react-dom";
import ButtonHollowstyle from "./ButtonHollow.module.css";

function ButtonHollow ({children, onClick, style, variant}) {
	// const styleObj = {};
  variant = "white";
	return(
			<button style={style} className={`ButtonHollowstyle.basicButton-${variant}`} onClick={onClick}>{children}</button>
	)
}

export default ButtonHollow;