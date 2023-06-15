import React, { useState } from "react";
import Homestyle from "./Home.module.css";

import { useNavigate} from 'react-router-dom';

import ButtonLight from "../../components/Buttons/ButtonLight.jsx";
import ButtonDark from "../../components/Buttons/ButtonDark.jsx";
import ButtonHollow from "../../components/Buttons/ButtonHollow.jsx";
import Menubar from "../../components/Menubar/Menubar";
import Footer from "../../components/Footer/Footer";


function Home () {
	const [onClick, setOnClick] = useState(); 
	const navigate = useNavigate();
	const handleClick= () =>{
		navigate("/login");
		console.log("clicked");
	}



	return(
		<div className={Homestyle.container}>
			<div className={Homestyle.section}>
				<div className={Homestyle.actualsection}>
					<div className={Homestyle.navbar}>
						<p className={Homestyle.logotext}>MEDIC.</p>
						
						<ButtonDark text="LOGIN" ClickFunction={handleClick} style={{fontSize: "15px", borderRadius: "20px", marginRight: "15px"}}>
						</ButtonDark>
						<ButtonLight children="Are you a doctor?" ClickFunction={handleClick} style={{fontSize: "15px", borderRadius: "20px", marginRight: "15px", minWidth: "max-content"}}/>
					</div>
					<Menubar/>
				</div>
				<div className={Homestyle.main}>
					<div className={Homestyle.mainLeft}>
						<p className={Homestyle.text1} >CONSULT ON</p>
						<div className={Homestyle.mainLeftSecond}>
							{/* <p style={{fontSize: "0.8rem", color: "white",maxWidth: "fit-content", margin: "0"}}>Store all your<br/> medical records in a <br/> secure vault with <br/> our decentralized<br/> solution</p> */}
							<p className={Homestyle.text2} >ANY ISSUE</p>
						</div>
						<div className={Homestyle.mainLeftThird}>
							<img src={require("../../assets/images/avatargroupimg.png")} alt="avatar" height="60rem"/>
							<p className={Homestyle.text1} >ONLINE</p>
						</div>
					</div>
					<div className={Homestyle.mainRight}>
						<img src={require("../../assets/images/mainleftimg.png")} alt="healthpluslogo"/>
					</div>
				</div>
				<div className={Homestyle.mainDown}>
					<ButtonDark style={{fontSize: "15px"}} text="Book an Appointment"/>
					<ButtonHollow style={{fontSize: "15px"}} type="white" text="Search for doctors"></ButtonHollow>
				</div>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;