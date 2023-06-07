import React from "react";
import { ReactDOM } from "react-dom";
import ButtonLightstyle from "./ButtonLight.module.css";

function ButtonLight (props) {
	return(

			<button className={ButtonLightstyle.btn} onClick={props.handleClick}>{props.text}</button>

	)
}

export default ButtonLight;