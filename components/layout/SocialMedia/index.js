import StyledSocialMedia from "./style";
import Icon from "@components/shared/Icon";

const SocialMedia = ({ className, show }) => {
  return (
    <StyledSocialMedia show={show} className={className}>
      <Icon
        src="/icons/socialMedia/github.svg"
        href="https://github.com/bryangamas"
        alt="Go to Github Profile"
        blank
        brigherIfDark
      />

      <Icon
        src="/icons/socialMedia/twitter.svg"
        href="https://twitter.com/bgamas_"
        alt="Go to Twitter Profile"
        blank
      />

      <Icon
        src="/icons/socialMedia/linkedin.svg"
        href="https://linkedin.com/in/bgamas"
        alt="Go to LinkedIn Profile"
        blank
      />
    </StyledSocialMedia>
  );
};

export default SocialMedia;
