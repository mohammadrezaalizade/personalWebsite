import React from "react";
import { Header } from "../components";
import HeadLayout from "./HeadLayout";
import classes from "./mainlayout.module.scss";
interface MainLayoutProps {
  title: String;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <section className={classes.container}>
      <HeadLayout title={title} />
      <Header />
      <div className={classes.content}>{children}</div>
    </section>
  );
};

export default MainLayout;
