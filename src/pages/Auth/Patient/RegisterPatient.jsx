import React from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";

import registerPatientStyles from "./RegisterPatient.module.css";

function RegisterPatient() {
  return (
    <>
      <p className={registerPatientStyles.logotext}>MEDIC.</p>
      <div className={registerPatientStyles.fullscreenFrame}>
        <div className={registerPatientStyles.fullLeft}>
          <div className={registerPatientStyles.registerBox}>
            <div className={registerPatientStyles.regPrompt}>
              <p className={registerPatientStyles.text1}>Sign Up</p>
              <p className={registerPatientStyles.text2}>
                Let's create an account
              </p>
            </div>
            <div className={registerPatientStyles.regFormBox}>
              <div className={registerPatientStyles.pfpBox}>
                <img
                  className={registerPatientStyles.pfp}
                  src={require("../../../assets/images/pfptemplate.png")}
                  alt=""
                />
                <ButtonDark
                  size="small"
                  text="Upload Profile Picture"
                  style={{
                    width: "100%",
                    borderRadius: "1.5rem",
                    fontSize: "0.8rem",
                    padding: "0.28rem",
                  }}
                />
              </div>
              <hr style={{ width: "100%" }}></hr>
              <form
                className={registerPatientStyles.form}
                action=""
                method="post"
              >
                <div className={registerPatientStyles.regForm}>
                  <div className={registerPatientStyles.nameFlexBox}>
                    {/* <label htmlFor="fname"></label> */}
                    <input
                      className={registerPatientStyles.fnameField}
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      required
                    />
                    {/* <label htmlFor="lname"></label> */}
                    <input
                      className={registerPatientStyles.lnameField}
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                    />
                  </div>
                  <label htmlFor="uname"></label>
                  <input
                    className={registerPatientStyles.usernameField}
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    required
                  />
                  <div className={registerPatientStyles.dobSexFlexBox}>
                    {/* <label htmlFor="dob"></label> */}
                    <input
                      className={registerPatientStyles.dobField}
                      type="date"
                      placeholder="dd/mm/yyyy"
                      name="dob"
                      required
                    />
                    {/* <label htmlFor="gender"></label> */}

                    <select
                      className={registerPatientStyles.genderField}
                      name="gender"
                      id="gender"
                    >
                      <option value="" required disabled selected>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="non-binary">Non-binary</option>
                    </select>
                  </div>
                  <label htmlFor="psw"></label>
                  <input
                    className={registerPatientStyles.pwdField}
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                  />
                </div>
              </form>
            </div>
            <div className={registerPatientStyles.signUpFlexBox}>
              <ButtonDark
                text="Sign Up"
                style={{
                  width: "75%",
                  borderRadius: "1.5rem",
                  fontSize: "0.8rem",
                }}
              ></ButtonDark>
              <p>
                Already have an account? <Link to="/login">Log In</Link>
              </p>
              <p style={{backgroundColor: "transparent"}}>
                Sign up as doctor <Link to="/registerdoc">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={registerPatientStyles.fullRight}>
          <div className={registerPatientStyles.banner}>
            <div className={registerPatientStyles.logoImg}>
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

export default RegisterPatient;
