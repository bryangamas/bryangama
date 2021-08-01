import Head from "next/head";
import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MobileMenu from "./MobileMenu";

const Layout = ({ children, navData, footerData }) => {
  const [menuMobileVisible, setMenuMobileVisible] = useState(false);

  return (
    <>
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
