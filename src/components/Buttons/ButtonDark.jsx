import React from "react";
import { ReactDOM } from "react-dom";
import ButtonDarkstyle from "./ButtonDark.module.css";

function ButtonDark (props) {
	return(
		<>
			<button className={ButtonDarkstyle.btn} onClick={props.handleClick}>{props.text}</button>
		</>
	)
}

export default ButtonDark;