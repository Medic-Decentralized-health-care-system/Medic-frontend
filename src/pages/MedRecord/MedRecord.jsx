import React from "react";
import styles from "./styles.module.css";
import WhiteButton from "../../components/Buttons/WhiteButton";
import ButtonDark from '../../components/Buttons/ButtonDark';

function MedRecord() {
  return (
    <>
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
            />
          </WhiteButton>
        </div>
        <div className={styles.recordBox}>
          <div className={styles.recordContainer}>
            <div className={styles.prescriptionBox}>
              <input name="Prescription title" type="text" />
              <input name="Prescription date" type="datetime-local" />
            </div>
            <div className={styles.commonDetailBox}>
              <input name="Diagnosed with" type="text" />
              <input name="Blood Pressure" type="text" />
              <input name="Pulse Rate" type="number" />
            </div>
            <div className={styles.drugBox}>
              <div className={styles.drugHeader}>
                <div className={styles.drugH1}>
                  <h4>Prescribed Drugs</h4>
                </div>
                <div className={styles.drugH2}>
                  <h4>Units(tablet or syrup)</h4>
                </div>
                <div className={styles.drugH3}>
                  <h4>Dosage (per day)</h4>
                </div>
              </div>
              {/* <DrugItem /> */}
              <div className={styles.addDrugItem}>
                <img
                  src={require("../../assets/images/addIcon.png")}
                  alt="add"
                  style={{height: "24px"}}
                  isDraggable="false"
                />
              </div>
            </div>
            <div className={styles.instructionBox}>
                <input name="Things to follow" type="text"/>
            </div>
            <ButtonDark text="Save"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default MedRecord;
