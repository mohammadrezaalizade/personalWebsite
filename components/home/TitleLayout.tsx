import React from "react";
import { motion } from "framer-motion";
import classes from "./TitleLayout.module.scss";
import { v4 as uuidv4 } from "uuid";
interface TitleLayoutProps {
  title: String;
}

const TitleLayout: React.FC<TitleLayoutProps> = ({ title }): JSX.Element => {
  return (
    <h1 id={classes.title}>
      {title.split("").map((word) => (
        <React.Fragment key={uuidv4()}>
          <motion.span
            id={classes.inroduce}
            key={uuidv4()}
            whileHover={{
              scale: 1.5,
              color: "#f8a700",
              transition: {
                duration: 0.1,
              },
            }}
          >
            {word}
          </motion.span>
          {word === "," && <br key={uuidv4()} />}
        </React.Fragment>
      ))}
    </h1>
  );
};

export default TitleLayout;
