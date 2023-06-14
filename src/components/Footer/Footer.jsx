import React from 'react';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
				<div className={styles.footer1}>
					trusted by
				</div>
				<div className={styles.footer2}>
					<img src={require('../../assets/images/fblogo.png')} alt="facebook"width={"150px"}/>
					<img src={require('../../assets/images/instalogo.png')} alt="instagram"width={"150px"}/>
					<img src={require('../../assets/images/githublogo.png')} alt="github"width={"150px"}/>
					<img src={require('../../assets/images/dribblelogo.png')} alt="dribble"width={"150px"}/>
					<img src={require('../../assets/images/behancelogo.png')} alt="behance"width={"150px"}/>
				</div>
			</div>
  )
}
