import React from "react";
import Icon from "@components/atoms/Icon";
import PageOptions from "@components/PageOptions";
import StyledHeader from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Icon src="/icons/logo.svg" />
      <Icon src="/icons/hamburger.svg" />
      <PageOptions />
    </StyledHeader>
  );
};

export default Header;
