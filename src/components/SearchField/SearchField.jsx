import React, { useState } from "react";
import styles from "./styles.module.css";

export default function SearchField({ widthOfEach, /*options1,*/ options2 , setSpeciality }) {
  return (
    <div className={styles.container}>
      {/* <select style={{ width: `${widthOfEach}` }} className={styles.sel1} required>
        <option value="" hidden disabled selected>Location</option>
        {options1.map((optionText) => {
          return <option value={optionText}>{optionText}</option>;
        })}
      </select> */}
      <select style={{ width: `${widthOfEach}` }} className={styles.sel2} onChange={setSpeciality} required>
      {/* <option value="" hidden disabled selected>Specialty</option> */}
        {options2.map((optionText) => {
          return <option value={optionText}>{optionText}</option>;
        })}
      </select>
    </div>
  );
}
