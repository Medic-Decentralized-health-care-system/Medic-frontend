import React from "react";
import { ReactDOM } from "react-dom";
import MenubarStyle from "./Menubar.module.css";
import WhiteButton from "../Buttons/WhiteButton";

const navbarPages = {
  text: ["Pricing", "How it works", "Help Center", "News"],
};

const handleClick = () => {};

function Menubar(props) {
  return (
    <div className={MenubarStyle.menubar} onClick={handleClick}>
      {navbarPages.text.map((btnText, index) => (
        <WhiteButton key={index} value={btnText}>
          {btnText}
        </WhiteButton>
      ))}
      <hr className={MenubarStyle.divider}></hr>
    </div>
  );
}

export default Menubar;
