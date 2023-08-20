import React from "react";
import { ReactDOM } from "react-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import { Link } from "react-router-dom";

import loginAdminStyles from "./LoginAdmin.module.css";

function LoginAdmin() {
  return (
    <>
      <p className={loginAdminStyles.logotext}>MEDIC.</p>
      <div className={loginAdminStyles.fullscreenFrame}>
        <div className={loginAdminStyles.fullLeft}>
          <div className={loginAdminStyles.loginBox}>
            <div className={loginAdminStyles.loginPrompt}>
              <p className={loginAdminStyles.text1}>Log In</p>
              <p className={loginAdminStyles.text2}>
                Welcome back, please enter your details
              </p>
            </div>
            <div className={loginAdminStyles.inputFieldFlexBox}>
              <form className={loginAdminStyles.form} action="" method="post">
                <div className={loginAdminStyles.formContainer}>
                  <label htmlFor="uname"></label>
                  <input
                    className={loginAdminStyles.usernameInputField}
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    required
                  />
                  <label htmlFor="psw"></label>
                  <input
                    className={loginAdminStyles.passwordInputField}
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                  />
                  {/* <button className={loginAdminStyles.btn}>Login</button> */}
                </div>
              </form>
            </div>
            <div className={loginAdminStyles.signinFlexBox}>
              <ButtonDark text="Login" style={{ width: "100%" }}></ButtonDark>
              <p>
                New User? <Link to="/registeradmin">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={loginAdminStyles.fullRight}>
          <div className={loginAdminStyles.banner}>
            <div className={loginAdminStyles.logoImg}>
              <img
                src={require("../../../assets/images/adminIllustration.png")}
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
              Medic makes it easier to group patients together.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
