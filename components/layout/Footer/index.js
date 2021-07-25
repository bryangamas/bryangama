import Icon from "@components/shared/Icon";
import React from "react";
import { StyledFooter, FooterCredits } from "./style";

const Footer = ({ footerData }) => {
  return (
    <StyledFooter>
      <FooterCredits>{footerData.credits}</FooterCredits>
      <Icon src="/icons/up.svg" href="#home" />
    </StyledFooter>
  );
};

export default Footer;
