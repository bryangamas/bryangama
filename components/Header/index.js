import React from "react";
import Icon from "../atoms/Icon";
import SocialMedia from "../SocialMedia";
import StyledHeader from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <Icon src="/icons/hamburger.svg" />
      <SocialMedia />
    </StyledHeader>
  );
};

export default Header;
