import React from "react";
import { ReactDOM } from "react-dom";
import { IconButton } from "rsuite";
import InfoOutline from "@rsuite/icons/InfoOutline";
import styles from './styles.module.css';

function Info({ style, children, date, link }) {
  return (
    <>
      <div className={styles.appContainer}>
        <p className={styles.appDoctorName}>Dr. Rajesh Joshi</p>
        <div className={styles.right}>
            <p>{`${date}`}</p>
            <IconButton
            as="div"
            style={styles.infoIconButton}
            icon={<InfoOutline />}
            />
        </div>
      </div>
    </>
  );
}

export default Info;
