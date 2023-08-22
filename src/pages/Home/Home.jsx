import React, { useState } from "react";
import Homestyle from "./Home.module.css";

import { useNavigate } from "react-router-dom";

import ButtonLight from "../../components/Buttons/ButtonLight.jsx";
import ButtonDark from "../../components/Buttons/ButtonDark.jsx";
import ButtonHollow from "../../components/Buttons/ButtonHollow.jsx";
import Menubar from "../../components/Menubar/Menubar";
import Footer from "../../components/Footer/Footer";
import { Header, Panel, Steps } from "rsuite";
import { Check, Explore, Search, Shield, Time, UserBadge } from "@rsuite/icons";

function Home() {
  const [onClick, setOnClick] = useState();
  const navigate = useNavigate();
  const handleClicktoLogin = () => {
    navigate("/login");
    console.log("clicked");
  };
  const handleClicktoSearch = () => {
    navigate("/search");
    console.log("Clicked");
  };

  return (
    <>
      <section id={Homestyle.landing} className={Homestyle.container}>
        <div className={Homestyle.section}>
          <div className={Homestyle.actualsection}>
            <div className={Homestyle.navbar}>
              <p className={Homestyle.logotext}>DeMedic.</p>

              <ButtonDark
                text="LOGIN"
                ClickFunction={handleClicktoLogin}
                style={{
                  fontSize: "15px",
                  borderRadius: "20px",
                  marginRight: "15px",
                }}
              ></ButtonDark>
              <ButtonLight
                children="Are you a doctor?"
                ClickFunction={handleClicktoLogin}
                style={{
                  fontSize: "15px",
                  borderRadius: "20px",
                  marginRight: "15px",
                  minWidth: "max-content",
                }}
              />
            </div>
            <Menubar />
          </div>
          <div className={Homestyle.main}>
            <div className={Homestyle.mainLeft}>
              <p className={Homestyle.text1}>CONSULT ON</p>
              <div className={Homestyle.mainLeftSecond}>
                {/* <p style={{fontSize: "0.8rem", color: "white",maxWidth: "fit-content", margin: "0"}}>Store all your<br/> medical records in a <br/> secure vault with <br/> our decentralized<br/> solution</p> */}
                <p className={Homestyle.text2}>ANY ISSUE</p>
              </div>
              <div className={Homestyle.mainLeftThird}>
                <img
                  src={require("../../assets/images/avatargroupimg.png")}
                  alt="avatar"
                  height="60rem"
                />
                <p className={Homestyle.text1}>ONLINE</p>
              </div>
            </div>
            <div className={Homestyle.mainRight}>
              <img
                src={require("../../assets/images/mainleftimg.png")}
                alt="healthpluslogo"
              />
            </div>
          </div>
          <div className={Homestyle.mainDown}>
            <ButtonDark
              style={{ fontSize: "15px" }}
              text="Book an Appointment"
            />
            <ButtonHollow
              ClickFunction={handleClicktoSearch}
              style={{ fontSize: "15px" }}
              type="white"
              text="Search for doctors"
            ></ButtonHollow>
          </div>
        </div>
        <Footer />
      </section>
      <section id="Howitworks" className={Homestyle.Howitworks}>
        <section className={Homestyle.block}>
          <section className={Homestyle.PatientStepsBox}>
            <div className={Homestyle.imgBlock}>
              <h2 id={Homestyle.howItWorksHeading}>How it Works</h2>
              <img
                alt=""
                height="400px"
                src={require("../../assets/images/blockhealth.png")}
              />
            </div>
            <Panel shaded style={{ backgroundColor: "white", padding: "1.2rem" }}>
              <Steps
                current={100}
                vertical
                style={{ fontSize: "small", color: "black" }}
              >
                <Steps.Item
                  style={{ color: "black" }}
                  title="Sign Up"
                  description="Patient signs up for DeMedic"
                  icon={
                    <UserBadge
                      style={{ fontSize: "x-large", color: "#3498FF" }}
                    />
                  }
                />
                <Steps.Item
                  title="Search"
                  description="Patient searches for doctors according to their specialty and proximity."
                  icon={
                    <Search style={{ fontSize: "x-large", color: "#3498FF" }} />
                  }
                />
                <Steps.Item
                  title="Browse"
                  description="Patient browses the results of the search deciding which doctor to choose from."
                  icon={
                    <Explore
                      style={{ fontSize: "x-large", color: "#3498FF" }}
                    />
                  }
                />
                <Steps.Item
                  title="Reserve"
                  description="Patient reserves or books an appointment slot with the doctor according to their availability and pays the fees for the doctor."
                  icon={
                    <Time style={{ fontSize: "x-large", color: "#3498FF" }} />
                  }
                />
                <Steps.Item
                  title="Payment"
                  description="The doctor receives the payment for the fees examines the patient, his medical records"
                  icon={
                    <Shield style={{ fontSize: "x-large", color: "#3498FF" }} />
                  }
                />
                <Steps.Item
                  title="Appointment"
                  description="Doctor examines the patient adds a prescription if required, and marks the appointment complete."
                  icon={
                    <Check style={{ fontSize: "x-large", color: "#3498FF" }} />
                  }
                />
              </Steps>
            </Panel>
          </section>
        </section>
      </section>
      
    </>
  );
}

export default Home;
