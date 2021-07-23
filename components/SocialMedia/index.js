import React from "react";
import StyledSocialMedia from "./style";
import Icon from "@components/atoms/Icon";

const SocialMedia = () => {
  return (
    <StyledSocialMedia>
      <Icon lightIfDark src="/icons/socialMedia/github.svg" />
      <Icon src="/icons/socialMedia/linkedin.svg" />
      <Icon src="/icons/socialMedia/twitter.svg" />
    </StyledSocialMedia>
  );
};

export default SocialMedia;
