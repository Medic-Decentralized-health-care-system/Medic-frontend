import React from "react";
import styles from "./styles.module.css";
import Avatar from "../Avatar/Avatar";

export default function Card({ doctor, style }) {
	return (
		<div className={styles.card}>
			<div className={styles.container}>
				<Avatar imgURL={doctor.imgURL} />
				<div className={styles.nameBox}>
					<p className={styles.text2}>{doctor.fullName}</p>
				</div>
				<div className={styles.infoBox}>
					<p className={styles.text3}>{doctor.degree}</p>
					<span className={styles.divider}></span>
					<p className={styles.text4}>{doctor.specialty}</p>
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
