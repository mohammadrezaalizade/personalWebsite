import React from "react";
import classes from "./header.module.scss";
import { Logo } from "../../public/assets";

const Header = () => {
  return (
    <header className={classes.container}>
      <Logo />
    </header>
  );
};

export default Header;
