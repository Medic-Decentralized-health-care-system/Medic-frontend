import React from "react";
import { ReactDOM } from "react-dom";
import ButtonHollowstyle from "./ButtonHollow.module.css";

function ButtonHollow (props) {
	// const styleObj = {};
	return(
			props.type === "white" ? <button style={props.style} className={ButtonHollowstyle.basicButtonwhite} onClick={props.onClick}>{props.text}</button>:
			<button className={ButtonHollowstyle.basicButtonprimary} onClick={props.onClick}>{props.text}</button>
	)
}

export default ButtonHollow;