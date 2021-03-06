import React from "react";
import classes from "./header.module.scss";
import { Logo } from "../../public/assets";
import HeaderLink from "./HeaderLink";
import {
  HomeIcon,
  QuestionMarkCircleIcon,
  CogIcon,
  MailIcon,
} from "@heroicons/react/outline";
import Linkeden from "../../public/assets/icons/Linkeden";
import GitHub from "../../public/assets/icons/GitHub";
import Link from "next/link";
import { LayoutGroup } from "framer-motion";

const navLinks = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    href: "/about",
    icon: <QuestionMarkCircleIcon />,
  },
  {
    title: "Skills",
    href: "/skills",
    icon: <CogIcon />,
  },
  {
    title: "Contant",
    href: "/contact",
    icon: <MailIcon />,
  },
];

const Header = () => {
  return (
    <header className={classes.container}>
      <nav className={classes.content}>
        <Link href="/">
          <a>
            <Logo id={classes.logo} />
          </a>
        </Link>
        <div className={classes.navigator}>
          <LayoutGroup id="headerLink">
            {navLinks.map((navLink, index) => (
              <HeaderLink
                key={index}
                title={navLink.title}
                href={navLink.href}
                icon={navLink.icon}
              />
            ))}
          </LayoutGroup>
        </div>
        <div className={classes.social}>
          <a
            href="https://www.linkedin.com/in/alizadehmohammadreza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkeden />
          </a>
          <a
            href="https://github.com/mohammadrezaalizade"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
