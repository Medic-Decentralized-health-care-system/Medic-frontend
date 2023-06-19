/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CardList from "../../components/CardList/CardList";
import SearchField from "../../components/SearchField/SearchField";
import ButtonDark from "../../components/Buttons/ButtonDark";
import data from "../../assets/Data/specialtiesList";
import Swal from "sweetalert2";
import Loader from "react-js-loader";
const locationList = ["Gwalior", "Nasik", "Delhi", "Punjab"];

const specialtyList = data.specialties;



export default function Search() {
  const [value, setValue] = useState(50);
  const [show, setShow] = useState(false);
  const [doctors , setDoctors] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [loading , setLoading] = useState(false);

  const handleSpecialtyChange = (event) => {
    console.log(event.target.value);
    setSelectedSpecialty(event.target.value);
  };

  const handleSliderChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const handleClickSearch =async () => {
    try{
      setLoading(true);
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + "doctors/doctors-within/800/center/0,0/unit/km/"+selectedSpecialty, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }) 
      const data = await res.json();
      if(data.status=='success'){
        setDoctors(data.data.doctors)
        setShow(true);
      }
    }
    catch(err){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: err.message,
      })
    }
    finally{
      setLoading(false);
    }
  
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
              <div className={styles.sliderContainer}>
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleSliderChange}
                className={styles.slider}
              />
              <div className={styles.sliderValue}>
                Search in the radius: {value} kms
              </div>
              </div>
              <SearchField options2={specialtyList} setSpeciality={handleSpecialtyChange}/>
              <div className={styles.searchButtonBox}>
                <ButtonDark
                  text="Search"
                  ClickFunction={handleClickSearch}
                  style={{ borderRadius: "100px", width: "25%" }}
                />
                {/* <Link to="" className={styles.text66}>
                  Advanced search
                </Link> */}
              </div>
            </div>
          </div>
          <div className={styles.fullBottom}>
            {
              loading ? <Loader
              type="bubble-loop"
              bgColor={"#FFFFFF"}
              color={"#FFFFFF"}
              size={30}
            /> :

              (!show && <div className={styles.banner}>
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
              </div>
              )
          }
            {show && (
              <div className={styles.contCardList}>
                <CardList doctors={doctors}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
