import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from 'react-router-dom';
import ButtonDark from '../../../components/Buttons/ButtonDark';
import registerDocStyles from './RegisterDoc.module.css';
import data from "./data";

const handleSpecialtyChange = (event) => {
	const selectedSpecialty = event.target.value;
	// Handle the selected specialty
};


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
								<img className={registerDocStyles.pfp} src={require('../../../assets/images/pfptemplate.png')} />
								<ButtonDark size="small" text="Upload Profile Picture" style={{borderRadius: "1.5rem", width: "100%", fontSize: "0.8rem", padding: "0.28rem" }} />
							</div>
							<hr style={{ width: "100%" }}></hr>
							<form className={registerDocStyles.form} action="" method="post">
								<div className={registerDocStyles.regForm}>
									<div className={registerDocStyles.nameFlexBox}>
										{/* <label for="fname"></label> */}
										<input className={registerDocStyles.fnameField} type="text" placeholder="First Name" name="fname" required />
										{/* <label for="lname"></label> */}
										<input className={registerDocStyles.lnameField} type="text" placeholder="Last Name" name="lname" />
									</div>
									<label for="uname"></label>
									<input className={registerDocStyles.usernameField} type="text" placeholder="Username" name="uname" required />
									<div className={registerDocStyles.degSpecialtyFlexBox}>
										<label for="degree" style={{ display: 'none' }}></label>
										<input className={registerDocStyles.degField} type="text" placeholder="Degree" name="degree" required />
										<label for="specialty" style={{ display: "none" }}></label>
										<select className={registerDocStyles.specialtyField} name="specialty" id="specialty" onChange={handleSpecialtyChange}>
											{data.specialties.map((specialty, index) => (
												<option key={index} value={specialty}>{specialty}</option>
											))}
										</select>
									</div>
									<div className={registerDocStyles.expAddressFlexBox}>
									<label for="degree" style={{ display: 'none' }}></label>
										<input className={registerDocStyles.expField} type="text" placeholder="Experience" name="exp" required />
										<label for="clinic address" style={{ display: "none" }}></label>
										<input className={registerDocStyles.AddressField} type="text" placeholder="Clinic Address" name="address" required/>
									</div>
									<label for="psw"></label>
									<input className={registerDocStyles.pwdField} type="password" placeholder="Password" name="psw" required />

								</div>
							</form>
						</div>
						<div className={registerDocStyles.signUpFlexBox}>
							<ButtonDark  text="Sign Up" style={{ width: "75%", fontSize: "0.8rem", borderRadius: "1.5rem" }} ></ButtonDark>
							<text>Already have an account? <Link to='/login'>Log In</Link></text>
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
