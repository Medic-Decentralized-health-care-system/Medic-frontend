import React from "react";
import { ReactDOM } from "react-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import { Link } from "react-router-dom";

import loginDocStyles from "./LoginDoc.module.css";

function LoginDoc() {
  return (
    <>
      <p className={loginDocStyles.logotext}>MEDIC.</p>
      <div className={loginDocStyles.fullscreenFrame}>
        <div className={loginDocStyles.fullLeft}>
          <div className={loginDocStyles.loginBox}>
            <div className={loginDocStyles.loginPrompt}>
              <p className={loginDocStyles.text1}>Log In</p>
              <p className={loginDocStyles.text2}>
                Welcome back, please enter your details
              </p>
            </div>
            <div className={loginDocStyles.inputFieldFlexBox}>
              <form className={loginDocStyles.form} action="" method="post">
                <div className={loginDocStyles.formContainer}>
                  <label htmlFor="uname"></label>
                  <input
                    className={loginDocStyles.usernameInputField}
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    required
                  />
                  <label htmlFor="psw"></label>
                  <input
                    className={loginDocStyles.passwordInputField}
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                  />
                  {/* <button className={loginDocStyles.btn}>Login</button> */}
                </div>
              </form>
            </div>
            <div className={loginDocStyles.signinFlexBox}>
              <ButtonDark
                text="Login"
                style={{ borderRadius: "15rem", width: "100%" }}
              ></ButtonDark>
              <p>
                New User? <Link to="/registerdoc">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={loginDocStyles.fullRight}>
          <div className={loginDocStyles.banner}>
            <div className={loginDocStyles.logoImg}>
              <img
                src={require("../../../assets/images/doctorsIllustration.png")}
                alt="mediclogo"
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
              Medic provides easy access to prescriptions and other documents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginDoc;
