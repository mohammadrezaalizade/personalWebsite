import React from "react";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import classes from "./landpage.module.scss";
const Landpage = () => {
  const intro: String = "Hi, I'm Mohammadreza, Front-end Developer";
  return (
    <div className={classes.introduce}>
      <h1 id={classes.title}>
        {intro.split("").map((word, index) => (
          <React.Fragment key={uuid()}>
            <motion.span
              id={classes.inroduce}
              key={uuid()}
              initial={{
                x: "-5vw",
                opacity: 0,
                rotate: 0,
                translateX: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
              whileHover={{
                scale: 1.5,
                translateX: 2,
                color: "#f8a700",
                transition: {
                  duration: 0.1,
                  type: "spring",
                },
              }}
            >
              {word}
            </motion.span>
            {word === "," && <br key={uuid()} />}
          </React.Fragment>
        ))}
      </h1>
      {/* <Hero /> */}
    </div>
  );
};

export default Landpage;
