import React from "react";
import styles from "./Footer.module.scss";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

const Footer = () => {
  const upHandler = () => {
    window.scrollTo(0, 0);
  };
  const downHandler = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  return (
    <div className={styles.footer}>
      <button onClick={upHandler}>
        <BsFillCaretUpFill />
      </button>
      <button className="mx-2" onClick={downHandler}>
        <BsFillCaretDownFill />
      </button>
    </div>
  );
};

export default Footer;
