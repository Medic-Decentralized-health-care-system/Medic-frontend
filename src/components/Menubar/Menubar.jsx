import React from "react";
import { ReactDOM } from "react-dom";
import MenubarStyle from "./Menubar.module.css";
import ButtonHollow from "../Buttons/ButtonHollow.jsx";
function Menubar (props) {
	return(
		<div className={MenubarStyle.menubar}>
			<ButtonHollow text="Pricing"></ButtonHollow>
			<ButtonHollow text="How it works"></ButtonHollow>
			<ButtonHollow text="Help Center"></ButtonHollow>
			<ButtonHollow text="News"></ButtonHollow>
			<hr className={MenubarStyle.divider}></hr>
		</div>
	)
}

export default Menubar;