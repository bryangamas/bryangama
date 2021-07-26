import React from "react";
import Navigation from "../Navigation";
import SocialMedia from "../SocialMedia";
import { MobileMenuContainer, GlobalStyle, CloseMenuIcon } from "./style";

const MobileMenu = ({
  navData,
  menuMobileVisible: menuVisible,
  setMenuMobileVisible,
}) => {
  const closeMenuMobile = () => {
    setMenuMobileVisible(false);
  };

  return (
    <MobileMenuContainer menuVisible={menuVisible}>
      <GlobalStyle menuVisible={menuVisible} />
      <Navigation navData={navData} onClick={closeMenuMobile} />
      <SocialMedia show />
      <CloseMenuIcon onClick={closeMenuMobile} />
    </MobileMenuContainer>
  );
};

export default MobileMenu;
