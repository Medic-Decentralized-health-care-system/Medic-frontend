/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import styles from "./styles.module.css";
import CardList from "../../components/CardList/CardList";
import SearchField from "../../components/SearchField/SearchField";

const locationList = ["Gwalior", "Nasik", "Delhi", "Punjab"];

const specialtyList = [
  "hswrdanbhlerf",
  "Nasigfergrek",
  "Delhrgrei",
  "Punjergerab",
];

export default function Search() {
  return (
    <>
      <div className={styles.searchActive}>
        <div className={styles.fullscreenFrame}>
          <p className={styles.logoText}>MEDIC.</p>
          <div className={styles.fullTop}>
            <div className={styles.searchBox}>
              <div className={styles.searchHeading}>
                <p className={styles.text58}>Search for a Doctor near you.</p>
              </div>
              <SearchField options1={locationList} options2={specialtyList} />
              <button className={styles.searchButtonBox}>
                <div className={styles.frame98}>
                  <button className={styles.signInButton}>
                    <p className={styles.text65}>Search</p>
                  </button>
                  <p className={styles.text66}>Advanced search</p>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.fullBottom}>
            <img src="" />
            <div className={styles.contCardList}>
              <CardList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
