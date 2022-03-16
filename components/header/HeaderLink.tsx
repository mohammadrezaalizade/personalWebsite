import React from "react";
import Link from "next/link";
import classes from "./headerLink.module.scss";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface HeaderLinkProps {
  title: String;
  href: String;
  icon: Object;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, icon, title }) => {
  const router = useRouter();

  return (
    <Link href={`${href}`}>
      <a className={classes.link}>
        {href === router.asPath && (
          <motion.div
            layoutId="headerLink"
            className={classes.activeLink}
          ></motion.div>
        )}
        <span id={classes.icon}>{icon}</span>{" "}
        <span id={classes.title}>{`${title}`}</span>
      </a>
    </Link>
  );
};

export default HeaderLink;
