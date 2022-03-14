import React from "react";
import Link from "next/link";
import classes from "./headerLink.module.scss";

interface HeaderLinkProps {
  title: String;
  href: String;
  icon: Object;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, icon, title }) => {
  return (
    <Link href={`${href}`}>
      <a className={classes.link}>
        <span id={classes.icon}>{icon}</span> <span id={classes.title}>{`${title}`}</span>
      </a>
    </Link>
  );
};

export default HeaderLink;
