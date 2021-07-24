import React from "react";
import styled from "styled-components";
import { StyledParagraph } from "../Paragraph/style";

const IconAsImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  ${(props) => extraAttr(props)}

  @media (min-width: 700px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const IconAsMask = styled.i`
  display: inline-block;
  mask-image: url(${({ src, mask }) => (mask ? mask : src)});
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  background: ${({ theme, brighter }) => {
    return brighter ? theme.text.primary : theme.text.secondary;
  }};
  width: 2.4rem;
  height: 2.4rem;
  ${(props) => extraAttr(props)}

  @media (min-width: 700px) {
    width: 3.5rem;
    height: 3.5rem;
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
  top: calc(100% - 5px);
  left: 50%;
  transform: translateX(-50%);
`;

export const IconWithCaptionContainer = styled.div`
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
  margin-bottom: 2.8rem;

  & > ${IconAsImg}, & > ${IconAsMask} {
    position: absolute;
    width: 3.6rem;
    height: 3.6rem;
    left: 0;
  }

  & > ${IconCaption} {
    opacity: 0;
    text-align: center;
  }

  & > ${IconAsImg} {
    opacity: 0;
  }

  &:hover {
    & > ${IconCaption} {
      opacity: 1;
      transition: opacity 200ms ease-in;
    }

    & > ${IconAsImg} {
      opacity: 1;
      transform: translateY(-10px);
      transition: opacity, transform 100ms ease-in;
    }

    & > ${IconAsMask} {
      opacity: 0;
      transform: translateY(-10px);
      transition: opacity, transform 100ms ease-in;
    }
  }

  @media (min-width: 700px) {
    width: 5.6rem;
    height: 5.6rem;
    margin-bottom: 4rem;

    & > ${IconAsImg}, & > ${IconAsMask} {
      position: absolute;
      width: 5.6rem;
      height: 5.6rem;
      left: 0;
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
