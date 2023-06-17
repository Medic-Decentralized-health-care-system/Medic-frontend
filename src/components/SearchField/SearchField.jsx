import React from "react";
import styles from "./styles.module.css";

export default function SearchField({ widthOfEach, options1, options2 }) {
  return (
    <div className={styles.container}>
      <select style={{ width: `${widthOfEach}` }} className={styles.sel1}>
        <img src="./assets/locationIcon.png" alt="" />
        {options1.map((optionText) => {
          return <option value={optionText}>{optionText}</option>;
        })}
      </select>
      <select style={{ width: `${widthOfEach}` }} className={styles.sel2}>
        {options2.map((optionText) => {
          return <option value={optionText}>{optionText}</option>;
        })}
      </select>
    </div>
  );
}
