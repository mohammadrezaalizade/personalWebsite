import Head from "next/head";
import React from "react";

interface HeadLayoutProps {
  title: String;
}

const HeadLayout: React.FC<HeadLayoutProps> = ({ title }) => {
  return (
    <Head>
      <title>MRA | {title}</title>
      <link rel="icon" href="/assets/image/logo.svg" />
    </Head>
  );
};

export default HeadLayout;
