import React from "react";
import { ReactDOM } from "react-dom";
import MenubarStyle from "./Menubar.module.css";
import WhiteButton from "../Buttons/WhiteButton";

const navbarPages = {
  text: ["How it works", "Contact Us"],
};

const handleClick = () => {};

function Menubar(props) {
  return (
    <div className={MenubarStyle.menubar} onClick={handleClick}>
      {navbarPages.text.map((btnText, index) => (
        <WhiteButton key={index} value={btnText}>
          <a
            style={{ textDecoration: "None", color: "white" }}
            href={`#${btnText.replaceAll(" ", "")}`}
          >
            {btnText}
          </a>
        </WhiteButton>
      ))}
      <hr className={MenubarStyle.divider}></hr>
    </div>
  );
}

export default Menubar;
