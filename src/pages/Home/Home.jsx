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
						
						<ButtonDark text="LOGIN" onClick={handleClick} style={{fontSize: "14px", borderRadius: "20px", marginRight: "15px"}}>
						</ButtonDark>
						<ButtonLight children="Are you a doctor?" style={{fontSize: "14px", borderRadius: "20px", marginRight: "15px", minWidth: "max-content"}}/>
					</div>
					<Menubar/>
				</div>
				<div className={Homestyle.main}>
					<div className={Homestyle.mainLeft}>
						<p style={{fontSize: "3.5rem", color: "white", margin: "0", padding: "15px"}}>CONSULT ON</p>
						<div className={Homestyle.mainLeftSecond}>
							{/* <p style={{fontSize: "0.8rem", color: "white",maxWidth: "fit-content", margin: "0"}}>Store all your<br/> medical records in a <br/> secure vault with <br/> our decentralized<br/> solution</p> */}
							<p style={{fontSize: "3.5rem", margin: "0", padding: "15px"}}>ANY ISSUE</p>
						</div>
						<div className={Homestyle.mainLeftThird}>
							<img src={require("../../assets/images/avatargroupimg.png")} alt="avatar" height="60rem"/>
							<p style={{color:"white",fontSize: "3.5rem",margin:"0", padding: "15px"}}>ONLINE</p>
						</div>
					</div>
					<div className={Homestyle.mainRight}>
						<img src={require("../../assets/images/mainleftimg.png")} alt="healthpluslogo" height="350px"/>
					</div>
				</div>
				<div className={Homestyle.mainDown}>
					<ButtonDark style={{fontSize: "14px"}} text="Book an Appointment"/>
					<ButtonHollow style={{fontSize: "14px"}} type="white" text="Search for doctors"></ButtonHollow>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;