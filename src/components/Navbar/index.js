import React from "react";
import style from "./main.module.css";

function Navbar() {
  return (
    <>
      <nav className={style.container}>
        <div className={style.logo}>LOGO</div>
        <button className={style.signIn}>Sign-In</button>
      </nav>
    </>
  );
}

export default Navbar;
