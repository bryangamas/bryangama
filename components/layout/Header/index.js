import React from "react";
import Icon from "@components/shared/Icon";
import PageOptions from "../PageOptions";
import { StyledHeader, HamburguerMenu, FullMenu } from "./style";

const Header = ({ navData, setMenuMobileVisible }) => {
  const openMenuMobile = () => {
    setMenuMobileVisible(true);
  };

  return (
    <StyledHeader>
      <Icon src="/icons/logo.svg" href="/" alt="Go to home" />
      <HamburguerMenu onClick={openMenuMobile} />
      <FullMenu navData={navData} />
      <PageOptions />
    </StyledHeader>
  );
};

export default Header;
