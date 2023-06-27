import React, { useState } from "react";
import styles from "./styles.module.css";
import WhiteButton from "../../components/Buttons/WhiteButton";
import ButtonDark from "../../components/Buttons/ButtonDark";
import DrugItem from "../../components/DrugItem/DrugItem";
import { useNavigate } from "react-router-dom";
import { create as ipfsHttpClient } from "ipfs-http-client";

const projectId = process.env.REACT_APP_PROJECT_ID;
const projectSecretKey = process.env.REACT_APP_PROJECT_KEY;
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);
const ipfs = ipfsHttpClient({
  url: "https://ipfs.infura.io:5001/api/v0",
  headers: {
    authorization,
  },
});


function MedRecord() {
  const [drugItems, setDrugItems] = useState([]);
  const Navigate = useNavigate();
  const [title , setTitle] = useState("");
  const [date , setDate] = useState("");
  const [diagnosis , setDiagnosis] = useState("");
  const [bp , setBp] = useState("");
  const [pulse , setPulse] = useState("");
  const [medicines , setMedicines] = useState([]);
  const [remarks , setRemarks] = useState();

  const handleAddItem = () => {
    setDrugItems([...drugItems, {}]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      name:"Hi"
    });
    console.log(body)
    try{
      const result = await ipfs.add(body);
      console.log(result)
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <div className={styles.fullscreenFrame}>
      <script defer src="./index.js"></script>
      <div className={styles.container}>
        <div className={styles.headingBox}>
          <WhiteButton
            style={{
              background:
                "linear-gradient(113.96deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "10px",
              padding: "10px",
              margin: "0px",
            }}
          >
            <img
              style={{ width: "25px" }}
              src={require("../../assets/images/homeIcon.png")}
              alt="home"
              onClick={()=>{
                Navigate('/dashboard/user')
              }}
            />
          </WhiteButton>
          <div className={styles.header}>
            <h1>New Medical Record</h1>
          </div>
          <WhiteButton
            style={{
              background:
                "linear-gradient(113.96deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.6)",
              borderRadius: "10px",
              padding: "10px",
              margin: "0px",
            }}
          >
            <img
              style={{ width: "25px" }}
              src={require("../../assets/images/crossIcon.png")}
              alt="home"
              onClick={()=>{
                Navigate('/dashboard/user')
              }}
            />
          </WhiteButton>
        </div>
        <div className={styles.recordBox}>
          <div className={styles.recordContainer}>
            <div className={styles.prescriptionBox}>
              <input
                placeholder="Prescription title"
                name="Prescription title"
                type="text"
                // onChange={()=>{
                //   set
                // }}
              />
              <input
                placeholder="Prescription date"
                name="Prescription date"
                type="datetime-local"
              />
            </div>
            <div className={styles.commonDetailBox}>
              <input
                id={styles.diagnosis}
                placeholder="Diagnosed with"
                name="Diagnosed with"
                type="text"
              />
              <input
                id={styles.bp}
                placeholder="Blood Pressure"
                name="Blood Pressure"
                type="text"
              />
              <input
                id={styles.pulse}
                placeholder="Pulse Rate"
                name="Pulse Rate"
                type="text"
              />
            </div>
            <div className={styles.drugBox}>
              <div className={styles.drugHeader}>
                <div className={styles.drugH1}>
                  <h4>Prescribed Drugs</h4>
                </div>
                <div className={styles.drugH2}>
                  <h4>Units (tablet or syrup)</h4>
                </div>
                <div className={styles.drugH3}>
                  <h4>Dosage (per day)</h4>
                </div>
              </div>
              <div className={`${styles.drugItemList} drugItemList`}>
                {/* DrugItems */}
                {drugItems.map((item, index) => (
                  <div key={index} className={styles.drugItem}>
                    <input
                      placeholder={`Drug ${index + 1}`}
                      name={`drugName_${index}`}
                      type="text"
                    />
                    <input
                      placeholder={`Units`}
                      name={`units_${index}`}
                      type="text"
                    />
                    <input
                      placeholder="Dosage (per day)"
                      name={`dosage_${index}`}
                      type="text"
                    />
                  </div>
                ))}
              </div>
              <div className={styles.addDrugItem}>
                <img
                  src={require("../../assets/images/addIcon.png")}
                  alt="add"
                  style={{ height: "24px", filter: "invert(100%)" }}
                  onClick={handleAddItem}
                  draggable={false}
                />
              </div>
            </div>
            <div className={styles.instructionBox}>
              <input
                placeholder="Remarks / Things to follow (if any)"
                name="Things to follow"
                type="text"
              />
            </div>
            <ButtonDark
              text="Save"
              style={{ borderRadius: "20px", width: "50%" }}
              ClickFunction = {handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedRecord;
