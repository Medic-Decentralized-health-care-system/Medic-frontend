import React from "react";
import { ReactDOM } from "react-dom";

function DrugItem ({index, styles}) {
    return(
        <>
            <input className={styles.inputEl} placeholder={`Drug ${index}`} type="text" />
            <input className={styles.inputEl} placeholder={`Drug ${index}`} type="text" />
            <input className={styles.inputEl} placeholder={`Drug ${index}`} type="text" />
        </>
    )
}

export default DrugItem;