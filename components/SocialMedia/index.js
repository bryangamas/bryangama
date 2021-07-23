import React from "react";
import StyledSocialMedia from "./style";
import Icon from "@components/atoms/Icon";

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <Icon
        lightIfDark
        src="/icons/socialMedia/github.svg"
        href="https://github.com/bryangamas"
      />
      <Icon
        src="/icons/socialMedia/linkedin.svg"
        href="https://linkedin.com/in/bgamas"
      />
      <Icon
        src="/icons/socialMedia/twitter.svg"
        href="https://twitter.com/bgamas_"
      />
    </StyledSocialMedia>
  );
};

export default SocialMedia;
