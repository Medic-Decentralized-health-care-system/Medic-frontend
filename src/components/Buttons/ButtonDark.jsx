// import React from "react";
// import { ReactDOM, render } from "react-dom";
// import ButtonDarkstyle from "./ButtonDark.module.css";

// function ButtonDark (props) {
	
// 	return(
			
// 			<button className={props.size == "small" ? ButtonDarkstyle.btnSmall :ButtonDarkstyle.btn} onClick={props.handleClick} style={props.style}>{props.text}</button>
// 	)
// }

// export default ButtonDark;

import { ReactDOM, render } from "react-dom";
import React from 'react';
import styles from './ButtonDark.module.css';

const ButtonDark = ({ children, onClick }) => {
  return (
    <button
      className={styles.blackButton}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonDark;
