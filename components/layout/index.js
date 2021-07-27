import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({ children, navData, footerData }) => {
  const [menuMobileVisible, setMenuMobileVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Bryan Gama | Full Stack Developer</title>
        <meta name="description" content="Fullstack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header navData={navData} setMenuMobileVisible={setMenuMobileVisible} />
      <MobileMenu
        navData={navData}
        menuMobileVisible={menuMobileVisible}
        setMenuMobileVisible={setMenuMobileVisible}
      />
      {children}
      <Footer footerData={footerData} />
    </>
  );
};

export default Layout;
