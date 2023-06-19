import React from "react";
import WhiteButtonStyle from "./WhiteButton.module.css";

function WhiteButton ({children, onClick, style}) {
    return(
        <button className={WhiteButtonStyle.btn} onClick={onClick} style={style}>
            {children}
        </button>
    )
}

export default WhiteButton;