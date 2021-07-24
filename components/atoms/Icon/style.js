import React from "react";
import styled from "styled-components";
import { StyledParagraph } from "../Paragraph/style";

const IconAsImg = styled.img`
  min-width: 24px;
  max-width: 28px;
  min-height: 20px;
  max-height: 24px;
  ${(props) => extraAttr(props)}

  @media (min-width: 700px) {
    min-width: 35px;
    max-width: 35px;
    max-height: 35px;
  }
`;

const IconAsMask = styled.i`
  display: inline-block;
  mask-image: url(${({ src }) => src});
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  background: ${({ theme, brighter }) => {
    return brighter ? theme.text.primary : theme.text.secondary;
  }};
  width: 24px;
  height: ${({ ratio }) => (ratio ? "" + 24 * ratio + "px" : "24px")};
  ${(props) => extraAttr(props)}

  @media (min-width: 700px) {
    width: 35px;
    height: ${({ ratio }) => (ratio ? "" + 35 * ratio + "px" : "35px")};
  }
`;

const extraAttr = ({ onClick, href }) => {
  return onClick || href ? "cursor: pointer;" : "";
};

const StyledIcon = (props) => {
  const { bright, brighter } = props;
  if (bright || brighter) {
    return (
      <div>
        <IconAsMask {...props} />
      </div>
    );
  }
  return <IconAsImg {...props} />;
};

export const IconCaption = styled(StyledParagraph)`
  position: absolute;
  top: calc(50% + 0.8rem);
  left: 50%;
  transform: translateX(-50%);
`;

export const IconWithCaptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & > ${IconCaption} {
    opacity: 0;
    text-align: center;
  }

  & > ${IconAsImg} {
    opacity: 0;
  }

  & > ${IconAsMask} {
    transform: translateY(-100%);
  }

  &:hover {
    & > ${IconAsImg} {
      opacity: 1;
      transition: opacity 100ms ease-in;
    }

    & > ${IconAsMask} {
      opacity: 0;
      transition: opacity 100ms ease-in;
    }

    & > ${IconCaption} {
      opacity: 1;
      transition: opacity 200ms ease-in;
    }
  }
`;

export const StyledIconWithCaption = (props) => {
  return (
    <>
      <IconAsImg {...props} />
      <IconAsMask {...props} />
    </>
  );
};

export default StyledIcon;
