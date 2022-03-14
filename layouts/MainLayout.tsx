import React from "react";
import HeadLayout from "./HeadLayout";

interface MainLayoutProps {
  title: String;
}

const MainLayout: React.FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <section>
      <HeadLayout title={title} />
      {children}
    </section>
  );
};

export default MainLayout;
