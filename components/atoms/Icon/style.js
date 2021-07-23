import React from "react";
import styled from "styled-components";

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

export const IconAsMask = styled.i`
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

export default StyledIcon;
