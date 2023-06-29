import React, { useRef } from "react";
import { ReactDOM } from "react-dom";
import styles from "./styles.module.css";

import { Link } from "react-router-dom";

function Info({ children, textRight, link }) {
  return (
    <>
      <div className={styles.infoContainer}>
        <p style={{ width: "fit-content" }} className={styles.textLeft}>{children}</p>
        <div className={styles.rightContainer}>
          <p style={{ width: "fit-content" }}>{`${textRight}`}</p>
          {link ? (
            <Link to={link}>
              <img
                src={require("../../assets/images/info-icon.png")}
                styles={styles.infoIconButton}
                alt=""
              />
            </Link>
          ) : (
            <img
              src={require("../../assets/images/info-icon.png")}
              style={{
                ...styles.infoIconButton,
                cursor: "pointer",
                height: "15px",
                width: "15px",
              }}
              alt=""
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Info;
