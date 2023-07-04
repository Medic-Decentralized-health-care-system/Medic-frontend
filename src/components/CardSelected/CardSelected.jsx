import React from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";

import Avatar from "../Avatar/Avatar";

function CardSelected({ doctor, style, avatarStyle }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <Avatar imgURL={doctor.image} imgStyle={avatarStyle} />
          <div className={styles.nameBox}>
            <p className={styles.text2}>{doctor.name}</p>
          </div>
          <div className={styles.infoBox}>
            <p className={styles.text3}>{doctor.degree}</p>
            <span className={styles.divider}></span>
            <p className={styles.text4}>{doctor.specialty}</p>
            <span className={styles.divider}></span>
            <p className={styles.text5}>{doctor.experience}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSelected;
