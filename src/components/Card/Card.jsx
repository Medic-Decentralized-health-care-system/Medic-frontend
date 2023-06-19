import React from "react";
import styles from "./styles.module.css";
import Avatar from "../Avatar/Avatar";

export default function Card({ doctor, style }) {
	return (
		<div className={styles.card}>
			<div className={styles.container}>
				<Avatar imgURL={doctor.image} />
				<div className={styles.nameBox}>
					<p className={styles.text2}>{doctor.name}</p>
				</div>
				<div className={styles.infoBox}>
					<p className={styles.text3}>{doctor.degree}</p>
					<span className={styles.divider}></span>
					<p className={styles.text4}>{doctor.specialities[0]}</p>
					<span className={styles.divider}></span>
					<p className={styles.text5}>{doctor.experience}</p>
				</div>
				<button className={styles.buttonDark}>
					<p className={styles.text6}>View Appointment Slots</p>
					<img src="" alt="" />
				</button>
			</div>
		</div>
	);
}
