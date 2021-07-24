import React from "react";
import StyledSocialMedia from "./style";
import Icon from "@components/atoms/Icon";

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <Icon
        src="/icons/socialMedia/github.svg"
        href="https://github.com/bryangamas"
        blank
        brigherIfDark
      />

      <Icon
        src="/icons/socialMedia/twitter.svg"
        href="https://twitter.com/bgamas_"
        blank
      />

      <Icon
        src="/icons/socialMedia/linkedin.svg"
        href="https://linkedin.com/in/bgamas"
        blank
      />
    </StyledSocialMedia>
  );
};

export default SocialMedia;
