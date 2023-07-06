import React from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";

import Avatar from "../Avatar/Avatar";
import { Divider } from "rsuite";

function PatientCard({ patient, style, avatarStyle }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <Avatar imgURL={patient.image} imgStyle={avatarStyle} />
          <div className={styles.nameBox}>
            <p className={styles.text2}>{patient.name}</p>
          </div>
          <div className={styles.infoBox}>
            <p className={styles.text3}>{patient.age}</p>
            <Divider vertical style={{ backgroundColor: "black" }} />
            <p className={styles.text4}>{patient.gender}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PatientCard;
