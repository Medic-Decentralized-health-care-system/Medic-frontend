import React from "react";
import { ReactDOM, render } from "react-dom";
import ButtonDarkstyle from "./ButtonDark.module.css";

function ButtonDark (props) {
	
	return(
			
			<button className={props.size == "small" ? ButtonDarkstyle.btnSmall :ButtonDarkstyle.btn} onClick={props.handleClick} style={props.style}>{props.text}</button>
	)
}

export default ButtonDark;