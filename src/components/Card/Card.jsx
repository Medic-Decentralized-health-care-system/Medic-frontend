import React, { useEffect } from "react";
import styles from "./styles.module.css";
import Avatar from "../Avatar/Avatar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDoctor } from "../../state/auth/auth-slice";

export default function Card({ doctor, style }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
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
					<p className={styles.text6} onClick={()=>{
						console.log('doctor')
						dispatch(setDoctor(doctor));
						navigate('/dashboard/user/bookappointment')
					}}>View Appointment Slots</p>
					<img src="" alt="" />
				</button>
			</div>
		</div>
	);
}
