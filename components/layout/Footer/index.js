import Icon from "@components/shared/Icon";
import { StyledFooter, FooterCredits } from "./style";

const Footer = ({ footerData }) => {
  return (
    <StyledFooter>
      <FooterCredits>{footerData.credits}</FooterCredits>
      <Icon
        src="/icons/up.svg"
        alt="Go up"
        href="#home"
        brightIfDark
        ratio={0.7}
      />
    </StyledFooter>
  );
};

export default Footer;
