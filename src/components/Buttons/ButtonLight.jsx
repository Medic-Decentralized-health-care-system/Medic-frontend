// import React from "react";
// import { ReactDOM } from "react-dom";
// import ButtonLightstyle from "./ButtonLight.module.css";

// function ButtonLight (props) {
// 	return(

// 			<button className={ButtonLightstyle.btn} onClick={props.handleClick}>{props.text}</button>

// 	)
// }

// export default ButtonLight;

import React from 'react';
import { ReactDOM } from 'react-dom';
import styles from './ButtonLight.module.css';

const ButtonLight = ({children, onClick}) => {
  return (
    <button
      className={styles.lightButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonLight;
