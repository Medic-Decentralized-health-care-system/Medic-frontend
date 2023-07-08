import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import { Link } from "react-router-dom";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import registerDocStyles from "./RegisterDoc.module.css";
import specialtiesList from "../../../assets/Data/specialtiesList";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../state/auth/auth-slice";
import Loader from "react-js-loader";
import Swal from "sweetalert2";
import { Button, Tooltip, Uploader, Whisper } from "rsuite";
import { FileUpload } from "@rsuite/icons";

function RegisterDoc() {
  const [firstname, setFirstName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [pfpBlobFile, setPfpBlobFile] = useState();
  const [lastName, setlastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [specialities, setSpecialities] = useState([]);
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function previewFile(file, callback) {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleDocRegister = async () => {
    try {
      setLoading(true);
      if (
        !firstname ||
        !lastName ||
        !username ||
        !degree ||
        !profilePic ||
        !specialities ||
        !experience ||
        !address ||
        !password ||
        !email
      ) {
        return Swal.fire({
          title: "Error!",
          text: "Please enter each detail",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
      const form = new FormData();
      form.append("name", firstname + " " + lastName);
      form.append("username", username);
      form.append("image", profilePic);
      form.append("degree", degree);
      form.append("email", email);
      form.append("specialities", specialities);
      form.append("experience", experience);
      form.append("clinicAddress", address);
      form.append("password", password);
      form.append("longitude", 0);
      form.append("latitude", 0);
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "auth/doctorRegister",
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
    }
  };

  return (
    <>
      <p className={registerDocStyles.logotext}>MEDIC.</p>
      <div className={registerDocStyles.fullscreenFrame}>
        <div className={registerDocStyles.fullLeft}>
          <div className={registerDocStyles.registerBox}>
            <div className={registerDocStyles.regPrompt}>
              <p className={registerDocStyles.text1}>Sign Up</p>
              <p className={registerDocStyles.text2}>Let's create an account</p>
            </div>
            <div className={registerDocStyles.regFormBox}>
              <div className={registerDocStyles.pfpBox}>
                <img
                  alt=""
                  className={registerDocStyles.pfp}
                  src={
                    profilePic
                      ? pfpBlobFile
                      : require("../../../assets/images/pfptemplate.png")
                  }
                />
                <Uploader
                  className={registerDocStyles.uploadProfilePic}
                  style={{ borderRadius: "100px", marginTop: "0.2rem" }}
                  accept="image/*"
                  fileListVisible={false}
                  onUpload={(file) => {
                    setProfilePic(file);
                    previewFile(file.blobFile, (value) => {
                      setPfpBlobFile(value);
                    });
                  }}
                >
                  <Whisper
                    placement="right"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>Add Profile Picture</Tooltip>}
                  >
                    <Button
                      style={{
                        borderRadius: "100px",
                        fontSize: "small",
                        backgroundColor: "black",
                        color: "white",
                        padding: "0.3rem",
                      }}
                    >
                      <FileUpload style={{ fontSize: "0.75rem" }} />
                    </Button>
                  </Whisper>
                </Uploader>
              </div>
              <hr style={{ width: "100%" }}></hr>
              <form className={registerDocStyles.form} action="" method="post">
                <div className={registerDocStyles.regForm}>
                  <div className={registerDocStyles.nameFlexBox}>
                    {/* <label htmlFor="fname"></label> */}
                    <input
                      className={registerDocStyles.fnameField}
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
                      className={registerDocStyles.lnameField}
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      onChange={(e) => {
                        setlastName(e.target.value);
                      }}
                    />
                  </div>
                  <label htmlFor="uname"></label>

                  <label htmlFor="uname"></label>
                  <input
                    className={registerDocStyles.usernameField}
                    type="text"
                    placeholder="Username"
                    name="uname"
                    id="uname"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    required
                  />
                  <input
                    className={registerDocStyles.emailField}
                    type="text"
                    placeholder="Email"
                    name="uname"
                    id="uname"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    required
                  />
                  <div className={registerDocStyles.degSpecialtyFlexBox}>
                    <label htmlFor="degree" style={{ display: "none" }}></label>
                    <input
                      className={registerDocStyles.degField}
                      type="text"
                      placeholder="Degree"
                      name="degree"
                      id="degree"
                      onChange={(e) => {
                        setDegree(e.target.value);
                      }}
                      required
                    />
                    <label
                      htmlFor="specialty"
                      style={{ display: "none" }}
                    ></label>
                    <select
                      className={registerDocStyles.specialtyField}
                      name="specialty"
                      onChange={(e) => {
                        setSpecialities(e.target.value);
                      }}
                      id="specialty"
                    >
                      {specialtiesList.specialties.map((specialty, index) => (
                        <option key={index} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={registerDocStyles.expAddressFlexBox}>
                    <label htmlFor="exp" style={{ display: "none" }}></label>
                    <input
                      className={registerDocStyles.expField}
                      type="text"
                      placeholder="Experience"
                      name="exp"
                      id="exp"
                      onChange={(e) => {
                        setExperience(e.target.value);
                      }}
                      required
                    />
                    <label
                      htmlFor="clinicAddress"
                      style={{ display: "none" }}
                    ></label>
                    <input
                      className={registerDocStyles.AddressField}
                      type="text"
                      placeholder="Clinic Address"
                      name="address"
                      id="clinicAddress"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <label htmlFor="psw"></label>
                  <input
                    className={registerDocStyles.pwdField}
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
            <div className={registerDocStyles.signUpFlexBox}>
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
                  fontSize: "0.8rem",
                  borderRadius: "1.5rem",
                }}
                ClickFunction={handleDocRegister}
              ></ButtonDark>
              <p>
                Already have an account? <Link to="/login">Log In</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={registerDocStyles.fullRight}>
          <div className={registerDocStyles.banner}>
            <div className={registerDocStyles.logoImg}>
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

export default RegisterDoc;
