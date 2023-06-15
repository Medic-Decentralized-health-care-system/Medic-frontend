import React from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <p className={styles.logotext}>MEDIC.</p>
      <div className={styles.fullscreenFrame}>
        <div className={styles.fullLeft}>
          <div className={styles.loginBox}>
            <div className={styles.loginPrompt}>
              <p className={styles.text1}>Log In</p>
              <p className={styles.text2}>
                Welcome back, please enter your details
              </p>
            </div>
            <div className={styles.inputFieldFlexBox}>
              <form className={styles.form} action="" method="post">
                <div className={styles.formContainer}>
                  <label htmlFor="uname"></label>
                  <input
                    className={styles.usernameInputField}
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    required
                  />
                  <label htmlFor="psw"></label>
                  <input
                    className={styles.passwordInputField}
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                  />
                  {/* <button className={styles.btn}>Login</button> */}
                </div>
              </form>
            </div>
            <div className={styles.signinFlexBox}>
              <ButtonDark text="Login" style={{ width: "100%" }}></ButtonDark>
              <p>
                New User? <Link to="/registerpatient">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.fullRight}>
          <div className={styles.banner}>
            <div className={styles.logoImg}>
              <img
                src={require("../../../assets/images/Mediclogokinda.png")}
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
              Medic keeps all your records secure in our decentralized vault.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
