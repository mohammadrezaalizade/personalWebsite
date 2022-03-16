import React from "react";
import { motion } from "framer-motion";
import classes from "./home.module.scss";
import TitleLayout from "./TitleLayout";
let intro: String = "Hi, I'm Mohammadreza, Front-end Developer";
const HomePage = () => {
  return (
    <section className={classes.container}>
      <div className={classes.intro}>
        <TitleLayout title={intro} />
      </div>
    </section>
  );
};
//Alan check kon

export default HomePage;
