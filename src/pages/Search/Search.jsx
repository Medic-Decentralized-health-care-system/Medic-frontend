/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CardList from "../../components/CardList/CardList";
import SearchField from "../../components/SearchField/SearchField";
import ButtonDark from "../../components/Buttons/ButtonDark";
const locationList = ["Gwalior", "Nasik", "Delhi", "Punjab"];

const specialtyList = [
  "hswrdanbhlerf",
  "Nasigfergrek",
  "Delhrgrei",
  "Punjergerab",
];



export default function Search() {
  const [show, setShow] = useState(false);

  const handleClickSearch = () => {
    setShow(true);
  
  };
  return (
    <>
      <div className={styles.searchActive}>
        <div className={styles.fullscreenFrame}>
          <p className={styles.logoText}>MEDIC.</p>
          <div className={styles.fullTop}>
            <div className={styles.searchBox}>
              <h2 className={styles.searchHeading}>
                Search for a Doctor near you.
              </h2>
              <SearchField options1={locationList} options2={specialtyList} />
              <div className={styles.searchButtonBox}>
                <ButtonDark
                  text="Search"
                  ClickFunction={handleClickSearch}
                  style={{ borderRadius: "100px", width: "25%" }}
                />
                <Link to="" className={styles.text66}>
                  Advanced search
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.fullBottom}>
            {!show && <div className={styles.banner}>
              <div className={styles.logoImg}>
                <img
                  src={require("../../assets/images/Mediclogokinda.png")}
                  alt="mediclogo"
                />
              </div>
              <hr
                style={{
                  textAlign: "center",
                  width: "2%",
                  border: "solid 1px black",
                }}
              ></hr>
              <p style={{ textAlign: "center", color: "white" }}>
                Medic keeps all your records secure in our decentralized vault.
              </p>
            </div>}
            {show && (
              <div className={styles.contCardList}>
                <CardList />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
