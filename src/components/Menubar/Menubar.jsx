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

function Menubar(props) {
	return (


		<div className={MenubarStyle.menubar}>
			{
				navbarPages.text.map((btnText, index) => (
						<ButtonHollow type="white" key={index} value={btnText} text={btnText}></ButtonHollow>
					))
			}
			<hr className={MenubarStyle.divider}></hr>
		</div>
	)
}

export default Menubar;