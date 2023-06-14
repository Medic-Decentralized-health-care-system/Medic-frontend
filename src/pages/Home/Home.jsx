import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import Homestyle from "./Home.module.css";

import {Link, useNavigate} from 'react-router-dom';

import ButtonLight from "../../components/Buttons/ButtonLight.jsx";
import ButtonDark from "../../components/Buttons/ButtonDark.jsx";
import ButtonHollow from "../../components/Buttons/ButtonHollow.jsx";
import Menubar from "../../components/Menubar/Menubar";
import Footer from "../../components/Footer/Footer";


function Home () {
	const [onClick, setOnClick] = useState(); 
	const navigate = useNavigate();
	const handleClick= ()=>{
		navigate("/login");
	}
	return(
		<div className={Homestyle.container}>
			<div className={Homestyle.section}>
				<div className={Homestyle.actualsection}>
					<div className={Homestyle.navbar}>
						<p className={Homestyle.logotext}>MEDIC.</p>
						<p className={Homestyle.bannertext}>Make an appointment with a doctor without a queue. Buy medicines</p>
						<ButtonDark text="LOGIN" onClick={handleClick}>
						</ButtonDark>
						<ButtonLight children="Are you a doctor?" />
					</div>
					<Menubar/>
				</div>
				<div className={Homestyle.main}>
					<div className={Homestyle.mainLeft}>
						<p style={{fontSize: "4rem", color: "white", margin: "0", padding: "50px"}}>CONSULT ON</p>
						<div className={Homestyle.mainLeftSecond}>
							{/* <p style={{fontSize: "0.8rem", color: "white",maxWidth: "fit-content", margin: "0"}}>Store all your<br/> medical records in a <br/> secure vault with <br/> our decentralized<br/> solution</p> */}
							<p style={{fontSize: "4rem", margin: "0"}}>ANY ISSUE</p>
						</div>
						<div className={Homestyle.mainLeftThird}>
							<img src={require("../../assets/images/avatargroupimg.png")} alt="avatar" height="60rem"/>
							<p style={{color:"white",fontSize: "4rem",margin:"0", padding: "50px"}}>ONLINE</p>
						</div>
					</div>
					<div className={Homestyle.mainRight}>
						<img src={require("../../assets/images/mainleftimg.png")} alt="healthpluslogo"/>
					</div>
				</div>
				<div className={Homestyle.mainDown}>
					<ButtonDark text="Book an Appointment"/>
					<ButtonHollow type="white" text="Search for doctors"></ButtonHollow>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;