import React from "react";
import { ReactDOM } from "react-dom";
import loginPatientStyles from "./LoginPatient.module.css";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import { Link } from "react-router-dom";

function LoginPatient() {
  return (
    <>
      <p className={loginPatientStyles.logotext}>MEDIC.</p>
      <div className={loginPatientStyles.fullscreenFrame}>
        <div className={loginPatientStyles.fullLeft}>
          <div className={loginPatientStyles.loginBox}>
            <div className={loginPatientStyles.loginPrompt}>
              <p className={loginPatientStyles.text1}>Log In</p>
              <p className={loginPatientStyles.text2}>
                Welcome back, please enter your details
              </p>
            </div>
            <div className={loginPatientStyles.inputFieldFlexBox}>
              <form className={loginPatientStyles.form} action="" method="post">
                <div className={loginPatientStyles.formContainer}>
                  <label htmlFor="uname"></label>
                  <input
                    className={loginPatientStyles.usernameInputField}
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    required
                  />
                  <label htmlFor="psw"></label>
                  <input
                    className={loginPatientStyles.passwordInputField}
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                  />
                  {/* <button className={loginPatientStyles.btn}>Login</button> */}
                </div>
              </form>
            </div>
            <div className={loginPatientStyles.signinFlexBox}>
              <ButtonDark text="Login" style={{ width: "100%" }}></ButtonDark>
              <p>
                New User? <Link to="/registerpatient">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={loginPatientStyles.fullRight}>
          <div className={loginPatientStyles.banner}>
            <div className={loginPatientStyles.logoImg}>
              <img
                src={require("../../../assets/images/Mediclogokinda.png")}
                alt="mediclogo"
                draggable="false"
              />
            </div>
            <hr
              style={{
                textAlign: "center",
                width: "25%",
                border: "solid 2px black",
              }}
            ></hr>
            <p style={{ textAlign: "center", color: "white" }}>
              Medic keeps all your records secure in our decentralized vault.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPatient;
