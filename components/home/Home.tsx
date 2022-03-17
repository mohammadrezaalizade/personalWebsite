import React from "react";
import classes from "./home.module.scss";
import Landpage from "./Landpage";
const HomePage = () => {
  return (
    <section className={classes.container}>
      <Landpage />
    </section>
  );
};

export default HomePage;
