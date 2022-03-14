import React from "react";
import Header from "../header";

import classes from "./home.module.scss";

const HomePage = () => {
  return (
    <section className={classes.container}>
      <Header />
    </section>
  );
};

export default HomePage;
