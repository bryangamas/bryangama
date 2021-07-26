import React from "react";
import Icon from "@components/shared/Icon";
import PageOptions from "../PageOptions";
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
