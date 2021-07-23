import React from "react";
import Icon from "@components/atoms/Icon";
import PageOptions from "@components/PageOptions";
import { StyledHeader, HamburguerMenu, FullMenu } from "./style";

const Header = ({ navData }) => {
  return (
    <StyledHeader>
      <Icon src="/icons/logo.svg" />
      <HamburguerMenu />
      <FullMenu navData={navData} />
      <PageOptions />
    </StyledHeader>
  );
};

export default Header;
