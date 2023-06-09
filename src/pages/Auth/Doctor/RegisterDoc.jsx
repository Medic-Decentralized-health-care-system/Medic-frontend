import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from 'react-router-dom';
import ButtonDark from '../../../components/Buttons/ButtonDark';

import registerDocStyles from './RegisterDoc.module.css';

function RegisterDoc() {
	return (
		<>
			<text className={registerDocStyles.logotext}>MEDIC.</text>
			<div className={registerDocStyles.fullscreenFrame}>
				<div className={registerDocStyles.fullLeft} >
					<div className={registerDocStyles.registerBox}>
						<div className={registerDocStyles.regPrompt}>
							<text className={registerDocStyles.text1}>Sign Up</text>
							<text className={registerDocStyles.text2}>Let's create an account</text>
						</div>
						<div className={registerDocStyles.regFormBox}>
							<div className={registerDocStyles.pfpBox}>
								<img src={require('../../../assets/images/pfptemplate.png')} />
								<ButtonDark text="Upload Profile Picture" style={{ width: "100%" }} />
							</div>
							<form className={registerDocStyles.form} action="" method="post">
								<div className={registerDocStyles.regForm}>
									<div className={registerDocStyles.nameFlexBox}>
										<label for="fname"></label>
										<input className={registerDocStyles.fnameField} type="text" placeholder="First Name" name="fname" required />
										<label for="lname"></label>
										<input className={registerDocStyles.lnameField} type="password" placeholder="Last Name" name="lname" />
									</div>
									<label for="uname"></label>
									<input className={registerDocStyles.usernameField} type="text" placeholder="Username" name="uname" required />
									<div className={registerDocStyles.dobSexFlexBox}>
										<label for="dob"></label>
										<input className={registerDocStyles.dobField} type="date" placeholder="dd/mm/yyyy" name="dob" required />
										<label for="gender"></label>
										<label for="cars"></label>
										<select className={registerDocStyles.genderField} name="cars" id="cars" text="rfvg">
											<option value="" disabled selected style={{backgroundColor: "gray"}}>Gender</option>
											<option value="volvo">Volvo</option>
											<option value="saab">Saab</option>
											<option value="opel">Opel</option>
											<option value="audi">Audi</option>
										</select>
									</div>
									<label for="psw"></label>
									<input className={registerDocStyles.pwdField} type="password" placeholder="Password" name="psw" required />
									
								</div>
							</form>
						</div>
						<div className={registerDocStyles.signUpFlexBox}>
							<ButtonDark text="Sign Up" style={{ width: "100%" }}></ButtonDark>
							<text>Already have an account? <Link to='/logindoc'>Log In</Link></text>
						</div>
					</div>
				</div>
				<div className={registerDocStyles.fullRight}>
					<div className={registerDocStyles.banner}>
						<div className={registerDocStyles.logoImg}>
							<img src={require("../../../assets/images/doctorsIllustration.png")} alt="mediclogo" />
						</div>
						<hr style={{ textAlign: "center", width: "25%", border: "solid 2px black" }}></hr>
						<p style={{ textAlign: "center", color: "white" }}>Medic provides easy access to prescriptions and other documents.</p>
					</div>

				</div>
			</div>
		</>
	);
}

export default RegisterDoc;
