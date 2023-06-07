import React from "react";
import { ReactDOM } from "react-dom";
import loginPatientStyles from './LoginPatient.module.css'
import ButtonDark from "../../../components/Buttons/ButtonDark";
import { Link } from "react-router-dom";


function LoginPatient() {
	return (
		<>
			<text className={loginPatientStyles.logotext}>MEDIC.</text>
			<div className={loginPatientStyles.fullscreenFrame}>
				<div className={loginPatientStyles.fullLeft} >
					{/* Idhar se baki styles baki*/}
					<div className={loginPatientStyles.loginBox}>
						<div className={loginPatientStyles.loginPrompt}>
							<text className={loginPatientStyles.text1}>Log In</text>
							<text className={loginPatientStyles.text2}>Welcome back, please enter your details</text>
						</div>
						<div className={loginPatientStyles.inputFieldFlexBox}>
							<form className={loginPatientStyles.form} action="" method="post">
								<div className={loginPatientStyles.formContainer}>
									<label for="uname"></label>
									<input className={loginPatientStyles.usernameInputField} type="text" placeholder="Username" name="uname" required />
									<label for="psw"></label>
									<input className={loginPatientStyles.passwordInputField} type="password" placeholder="Password" name="psw" required />
									{/* <button className={loginPatientStyles.btn}>Login</button> */}
								</div>
							</form>
						</div>
						<div className={loginPatientStyles.signinFlexBox}>
							<ButtonDark text="Login" style={{width: "100%", borderRadius: "0.4rem"}}></ButtonDark>
							<text>New User? <Link to='/registerpatient'>Sign Up</Link></text>
						</div>
					</div>
				</div>
				<div className={loginPatientStyles.fullRight}>
					<div className={loginPatientStyles.banner}>
						<div className={loginPatientStyles.logoImg}>
							<img src={require("../../../assets/images/Mediclogokinda.png")} alt="mediclogo" style={{width: "14rem"}}/>
						</div>
						<hr style={{textAlign: "center" ,width: "25%", border: "solid 2px black"}}></hr>
						<p style={{textAlign: "center", color: "white"}}>Medic keeps all your records secure in our decentralized vault.</p>
					</div>

				</div>
			</div>
		</>
	)
}

export default LoginPatient;