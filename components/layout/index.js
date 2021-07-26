import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, navData, footerData }) => {
  return (
    <>
      <Head>
        <title>Bryan Gama | Full Stack Developer</title>
        <meta name="description" content="Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navData={navData} />
      {children}
      <Footer footerData={footerData} />
    </>
  );
};

export default Layout;