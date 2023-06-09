import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from 'react-router-dom';
import ButtonDark from '../../../components/Buttons/ButtonDark';

import registerAdminStyles from './RegisterAdmin.module.css';

function RegisterAdmin() {
	return (
		<>
			<text className={registerAdminStyles.logotext}>MEDIC.</text>
			<div className={registerAdminStyles.fullscreenFrame}>
				<div className={registerAdminStyles.fullLeft} >
					<div className={registerAdminStyles.registerBox}>
						<div className={registerAdminStyles.regPrompt}>
							<text className={registerAdminStyles.text1}>Sign Up</text>
							<text className={registerAdminStyles.text2}>Let's create an account</text>
						</div>
						<div className={registerAdminStyles.regFormBox}>
							<div className={registerAdminStyles.pfpBox}>
								<img className={registerAdminStyles.pfp} src={require('../../../assets/images/pfptemplate.png')} />
								<ButtonDark size="small" text="Upload Profile Picture" style={{width: "100%", fontSize: "0.8rem", padding: "0.28rem"}} />
							</div>
							<hr style={{width: "100%"}}></hr>
							<form className={registerAdminStyles.form} action="" method="post">
								<div className={registerAdminStyles.regForm}>
									<div className={registerAdminStyles.nameFlexBox}>
										{/* <label for="fname"></label> */}
										<input className={registerAdminStyles.fnameField} type="text" placeholder="First Name" name="fname" required />
										{/* <label for="lname"></label> */}
										<input className={registerAdminStyles.lnameField} type="text" placeholder="Last Name" name="lname" />
									</div>
									<label for="uname"></label>
									<input className={registerAdminStyles.usernameField} type="text" placeholder="Username" name="uname" required />
									<div className={registerAdminStyles.dobSexFlexBox}>
										{/* <label for="dob"></label> */}
										<input className={registerAdminStyles.dobField} type="date" placeholder="dd/mm/yyyy" name="dob" required />
										{/* <label for="gender"></label> */}
										
										<select className={registerAdminStyles.genderField} name="gender" id="gender">
											<option value="" required disabled selected >Gender</option>
											<option value="male">Male</option>
											<option value="female">Female</option>
											<option value="non-binary">Non-binary</option>
										</select>
									</div>
									<label for="psw"></label>
									<input className={registerAdminStyles.pwdField} type="password" placeholder="Password" name="psw" required />
									
								</div>
							</form>
						</div>
						<div className={registerAdminStyles.signUpFlexBox}>
							<ButtonDark  text="Sign Up" style={{ width: "75%", fontSize: "0.8rem" }}></ButtonDark>
							<text>Already have an account? <Link to='/loginadmin'>Log In</Link></text>
						</div>
					</div>
				</div>
				<div className={registerAdminStyles.fullRight}>
					<div className={registerAdminStyles.banner}>
						<div className={registerAdminStyles.logoImg}>
							<img src={require("../../../assets/images/adminIllustration.png")} alt="mediclogo" />
						</div>
						<hr style={{ textAlign: "center", width: "25%", border: "solid 2px black" }}></hr>
						<p style={{ textAlign: "center", color: "white" }}>Medic provides easy access to prescriptions and other documents.</p>
					</div>

				</div>
			</div>
		</>
	);
}

export default RegisterAdmin;
