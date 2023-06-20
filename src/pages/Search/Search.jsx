/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CardList from "../../components/CardList/CardList";
import SearchField from "../../components/SearchField/SearchField";
import ButtonDark from "../../components/Buttons/ButtonDark";
import data from "../../assets/Data/specialtiesList";
import Swal from "sweetalert2";
import Loader from "react-js-loader";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../state/auth/auth-slice"
const locationList = ["Gwalior", "Nasik", "Delhi", "Punjab"];

const specialtyList = data.specialties;



export default function Search() {
  const [value, setValue] = useState(50);
  const [show, setShow] = useState(false);
  const [doctors , setDoctors] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [loading , setLoading] = useState(false);
  const [long, setLong] = useState(0);
  const [lat, setLat] = useState(0);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async function (position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          await setLocation(position.coords.latitude, position.coords.longitude);
        },
        function (error) {
          console.error(`Error getting user's location: ${error.message}`);
        }
      );
    }
  }, [lat , long]);

  const handleSpecialtyChange = (event) => {
    console.log(event.target.value);
    setSelectedSpecialty(event.target.value);
  };

  const handleSliderChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const setLocation = async (latitude, longitude) => {
    try {
      console.log("Setting up your location ........");
      if (lat === 0 && long === 0) {
        console.log("Location not found, using previous location ..........");
        return;
      }
      console.log(lat , long);
      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "common/setlocation/" + userInfo._id,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            longitude: longitude,
            latitude: latitude,
          }),
        }
      );
      const data = await response.json();
      dispatch(setUser(data.data.user));
    } catch (err) {
      console.log(err);
    }
  };

  const handleClickSearch =async () => {
    try{
      setLoading(true);
      const res = await fetch(process.env.REACT_APP_BACKEND_URL + `doctors/doctors-within/800/center/${long},${lat}/unit/km/`+selectedSpecialty, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }) 
      const data = await res.json();
      if(data.status==='success'){
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
