// TODO:
import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.module.css";

function InputField({
  styles,
  type,
  placeholder,
  name,
  id,
  isRequired,
  ChangeFunction,
}) {
  return (
    <>
      <input
        className={styles.passwordInputField}
        type="password"
        placeholder="Password"
        name="psw"
        id="psw"
        onChange={ChangeFunction}
      />
    </>
  );
}

export default InputField;
