import React from "react";
import styles from "./styles.module.css";

export default function Avatar({ imgURL, style }) {
  return (
    <div className={styles.container}>
      <img src={imgURL} alt="avatar" />
    </div>
  );
}
