import React from "react";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>trusted by</div>
      <div className={styles.footer2}>
        <img className={styles.trustedImg}
          src={require("../../assets/images/Metropolis.png")}
          alt="facebook"
          width={"150px"}
        />
        <img className={styles.trustedImg}
          src={require("../../assets/images/Apollo.png")}
          alt="instagram"
          width={"150px"}
        />
        <img className={styles.trustedImg}
          src={require("../../assets/images/fortis.png")}
          alt="github"
          width={"150px"}
        />
        <img className={styles.trustedImg}
          src={require("../../assets/images/hir-fortis.webp")}
          alt="hir-fortis"
          width={"150px"}
        />
        <img className={styles.trustedImg}
          src={require("../../assets/images/artemis-logo.png")}
          alt="hir-fortis"
          width={"150px"}
        />
        {/* <img src={require('../../assets/images/dribblelogo.png')} alt="dribble"width={"150px"}/>
					<img src={require('../../assets/images/behancelogo.png')} alt="behance"width={"150px"}/> */}
      </div>
    </div>
  );
}
