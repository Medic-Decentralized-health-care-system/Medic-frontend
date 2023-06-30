import React from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CardList({ doctors }) {
  const userInfo = useSelector((state) => state.userInfo);
  console.log(userInfo)
  return (
    <>
      <div className={styles.container}>
        {doctors.length === 0 ? (
          <h2>No Doctors Found</h2>
        ) : (
          doctors.map((doctor) => {
            return (
              <Card
                doctor={doctor}
              />
            );
          })
        )
        }
      </div>
    </>
  );
}

export default CardList;
