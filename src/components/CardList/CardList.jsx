import React from "react";
import Card from "../Card/Card";
import styles from "./styles.module.css";

const doctors = [
	{
		fullName: "Dr. Aditi Singh",
		degree: "MBBS",
		specialty: "General Physician",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	},
	{
		fullName: "Dr. Pataal Singh",
		degree: "MBBS",
		specialty: "Dermatologist",
		experience: "12 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	},
	{
		fullName: "Dr. Parineeti Singh",
		degree: "MBBS",
		specialty: "Gynaecologist",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	}
	,
	{
		fullName: "Dr. Parineeti Singh",
		degree: "MBBS",
		specialty: "Gynaecologist",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	}
	,
	{
		fullName: "Dr. Parineeti Singh",
		degree: "MBBS",
		specialty: "Gynaecologist",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	}
	,
	{
		fullName: "Dr. Parineeti Singh",
		degree: "MBBS",
		specialty: "Gynaecologist",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	},
	{
		fullName: "Dr. Aditi Singh",
		degree: "MBBS",
		specialty: "General Physician",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	},
	{
		fullName: "Dr. Aditi Singh",
		degree: "MBBS",
		specialty: "General Physician",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	},
	{
		fullName: "Dr. Aditi Singh",
		degree: "MBBS",
		specialty: "General Physician",
		experience: "4 years",
		imgURL:
			"https://i.pinimg.com/originals/35/57/55/355755832670880825ad87838e18d6b6.jpg"
	}
];

function CardList() {
  return (
    <>
      <div className={styles.container}>
        {doctors.map((content) => {
          return <Card doctor={content} />;
        })}
      </div>
    </>
  );
}

export default CardList;
