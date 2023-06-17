import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import registerPatientStyles from "./RegisterPatient.module.css";
import Loader from "react-js-loader";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../state/auth/auth-slice";

function RegisterPatient() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [date, setDate] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const calculateAge = () => {
    const [year, month, day] = date.split("-");
    const birthDateObj = new Date(`${year}-${month}-${day}`);
    const ageDiffMs = Date.now() - birthDateObj.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    setAge(age);
  };

  const handlePatientRegister = async () => {
    try {
      setLoading(true);
      console.log(age);
      if (
        !firstName ||
        !lastName ||
        !username ||
        !date ||
        !gender ||
        !password ||
        !profilePicture
      ) {
        return Swal.fire({
          title: "Error!",
          text: "Please enter each detail",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
      calculateAge();
      const form = new FormData();
      form.append("name", firstName + " " + lastName);
      form.append("username", username);
      form.append("age", age);
      form.append("email", email);
      form.append("image", profilePicture);
      form.append("gender", gender);
      form.append("longitude", 0);
      form.append("latitude", 0);
      form.append("password", password);
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "auth/patientRegister",
        {
          method: "POST",
          body: form,
        }
      );
      const data = await res.json();
      console.log(data);
      if (data.message == "User has been signed in!") {
        Swal.fire({
          title: "Success!",
          text: data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        dispatch(setUser(data.user));
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    } finally {
      setLoading(false);
      console.log("done");
    }
  };
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
                  src={
                    profilePicture
                      ? URL.createObjectURL(profilePicture)
                      : require("../../../assets/images/pfptemplate.png")
                  }
                  alt=""
                />
                {/* <label htmlFor="uploadProfilePicture"> */}
                {/* <ButtonDark
                size="small"
                text="Upload Profile Picture"
                style={{
                  width: "100%",
                  borderRadius: "1.5rem",
                  fontSize: "0.8rem",
                  padding: "0.28rem",
                }}
              /> */}
                <input
                  id="uploadProfilePicture"
                  className={registerPatientStyles.uploadProfilePic}
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureUpload}
                  style={{
                    width: "75%",
                    borderRadius: "1.5rem",
                    fontSize: "0.8rem",
                    padding: "0.28rem",
                  }}
                />
                {/* </label> */}
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
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      required
                    />
                    {/* <label htmlFor="lname"></label> */}
                    <input
                      className={registerPatientStyles.lnameField}
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    required
                  />
                  <label htmlFor="email"></label>
                  <input
                    className={registerPatientStyles.emailField}
                    type="text"
                    placeholder="Email"
                    name="uname"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <div className={registerPatientStyles.dobSexFlexBox}>
                    {/* <label htmlFor="dob"></label> */}
                    <input
                      className={registerPatientStyles.dobField}
                      type="date"
                      placeholder="dd/mm/yyyy"
                      name="dob"
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      required
                    />
                    {/* <label htmlFor="gender"></label> */}

                    <select
                      className={registerPatientStyles.genderField}
                      name="gender"
                      id="gender"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
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
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    required
                  />
                </div>
              </form>
            </div>
            <div className={registerPatientStyles.signUpFlexBox}>
              <ButtonDark
                text={
                  loading ? (
                    <Loader
                      type="bubble-loop"
                      bgColor={"#FFFFFF"}
                      color={"#FFFFFF"}
                      size={30}
                    />
                  ) : (
                    "Sign Up"
                  )
                }
                style={{
                  width: "75%",
                  borderRadius: "1.5rem",
                  fontSize: "0.8rem",
                }}
                ClickFunction={handlePatientRegister}
              ></ButtonDark>
              <p style={{ textAlign: "center" }}>
                Already have an account? <Link to="/login">Log In</Link>
                <br />
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
