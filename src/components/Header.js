import React from "react";
import CartBtn from "./CartBtn";
import classes from "../css/header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.headerTitle}>Redux test - Welcome</h1>
      <CartBtn />
    </header>
  );
}

export default Header;
