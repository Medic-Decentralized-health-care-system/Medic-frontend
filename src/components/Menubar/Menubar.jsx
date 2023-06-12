import React from "react";
import { ReactDOM } from "react-dom";
import MenubarStyle from "./Menubar.module.css";
import ButtonHollow from "../Buttons/ButtonHollow.jsx";


const navbarPages = {
	'text': [
		'Pricing',
		'How it works',
		'Help Center',
		'News'
	]
}

const buttonType = "white";

function Menubar(props) {
	return (


		<div className={MenubarStyle.menubar}>
			{
				navbarPages.text.map((btnText, index) => (
						<ButtonHollow type={buttonType} key={index} value={btnText}>{btnText}</ButtonHollow>
					))
			}
			<hr className={MenubarStyle.divider}></hr>
		</div>
	)
}

export default Menubar;