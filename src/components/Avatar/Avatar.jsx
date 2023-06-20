import React from "react";
import styles from "./styles.module.css";

export default function Avatar({ imgURL, style, imgStyle }) {
  return (
    <div className={styles.container}>
      <img style={imgStyle} src={imgURL} alt="avatar" />
    </div>
  );
}
