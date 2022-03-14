import React from "react";
import Link from "next/link";
import classes from "./headerLink.module.scss";
import { useRouter } from "next/router";

interface HeaderLinkProps {
  title: String;
  href: String;
  icon: Object;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ href, icon, title }) => {
  
  const router = useRouter()

  const activeLink = href === router.asPath ? classes.linkActive: classes.link
  
  return (
    <Link href={`${href}`}>
      <a className={activeLink}>
        <span id={classes.icon}>{icon}</span> <span id={classes.title}>{`${title}`}</span>
      </a>
    </Link>
  );
};

export default HeaderLink;
