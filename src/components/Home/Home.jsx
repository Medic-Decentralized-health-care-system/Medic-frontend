import React from "react";
import { ReactDOM } from "react-dom";
import Homestyle from "./Home.module.css";

import ButtonLight from "../Buttons/ButtonLight.jsx";
import ButtonDark from "../Buttons/ButtonDark.jsx";
import ButtonHollow from "../Buttons/ButtonHollow.jsx";

function Home () {
	return(
		<div className={Homestyle.container}>
			<div className={Homestyle.section}>
				<div className={Homestyle.actualsection}>
					<div className={Homestyle.navbar}>
						<p className={Homestyle.logotext}>MEDIC.</p>
						<p className={Homestyle.bannertext}>Make an appointment with a doctor without a queue. Buy medicines</p>
						<ButtonDark text="Login" />
						<ButtonLight text="Are you a doctor?" />
					</div>
					<div className={Homestyle.menubar}>
						<ButtonHollow text="Pricing"></ButtonHollow>
						<ButtonHollow text="How it works"></ButtonHollow>
						<ButtonHollow text="Help Center"></ButtonHollow>
						<ButtonHollow text="News"></ButtonHollow>
						<hr className={Homestyle.divider}></hr>
					</div>
				</div>
			</div>
			{/* TODO: Make a footer component: */}
			<div className={Homestyle.footer}>
				<div className={Homestyle.footer1}>
					trusted by
				</div>
				<div className={Homestyle.footer2}>
					<img src={require('../../assets/images/fblogo.png')} alt="facebook"width={"150px"}/>
					<img src={require('../../assets/images/instalogo.png')} alt="instagram"width={"150px"}/>
					<img src={require('../../assets/images/githublogo.png')} alt="github"width={"150px"}/>
					<img src={require('../../assets/images/dribblelogo.png')} alt="dribble"width={"150px"}/>
					<img src={require('../../assets/images/behancelogo.png')} alt="behance"width={"150px"}/>
				</div>
			</div>
		</div>
	)
}

export default Home;