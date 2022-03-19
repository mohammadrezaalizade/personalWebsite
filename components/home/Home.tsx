import React from "react";
import AboutMe from "./AboutMe";
import classes from "./home.module.scss";
import Landpage from "./Landpage";
const HomePage = () => {
  return (
    <section className={classes.container}>
      <Landpage />
      <AboutMe />
    </section>
  );
};

export default HomePage;
