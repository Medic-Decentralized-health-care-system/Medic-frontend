import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";
import ButtonDark from "../../../components/Buttons/ButtonDark";
import { Link } from "react-router-dom";
import Loader from "react-js-loader";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../../state/auth/auth-slice";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleLogin = async () => {
    console.log(username, password);
    if (!username || !password) {
      return Swal.fire({
        title: "Error!",
        text: "Please enter each detail",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    try {
      setLoading(true);
      const res = await fetch(
        process.env.REACT_APP_BACKEND_URL + "auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await res.json();
      if (data.status == "success") {
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
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <label htmlFor="psw"></label>
                  <input
                    className={styles.passwordInputField}
                    type="password"
                    placeholder="Password"
                    name="psw"
                    id="psw"
                    required
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  
                </div>
              </form>
            </div>
            <div className={styles.signinFlexBox}>
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
                    "Log In"
                  )
                }
                style={{ width: "100%" }}
                ClickFunction={handleLogin}
              ></ButtonDark>
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
