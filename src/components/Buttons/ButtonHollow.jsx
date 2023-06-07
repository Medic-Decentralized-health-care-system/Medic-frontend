import React from "react";
import { ReactDOM } from "react-dom";
import ButtonHollowstyle from "./ButtonHollow.module.css";

function ButtonHollow (props) {
	const styleObj = {};
	 
	return(
			<button className={ButtonHollowstyle.btn} onClick={props.handleClick}>{props.text}</button>

	)
}

export default ButtonHollow;