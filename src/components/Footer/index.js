import React from "react";
import style from "./main.module.css";

function Footer() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.copyRight}>
          @ copyRight Warunyou Kongchai 622110332{" "}
        </div>
        <button className={style.logIn}>Log-In</button>
      </nav>
    </>
  );
}

export default Footer;
