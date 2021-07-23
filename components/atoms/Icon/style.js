import React from "react";
import styled from "styled-components";

const IconAsImg = styled.img`
  min-width: 24px;
  max-width: 28px;
  min-height: 20px;
  max-height: 24px;
  ${(props) => extraAttr(props)}

  @media (min-width: 450px) {
    min-width: 40px;
    max-width: 40px;
    max-height: 40px;
  }
`;

export const IconAsMask = styled.i`
  display: inline-block;
  mask-image: url(${({ src }) => src});
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
  background: ${({ theme }) => {
    return theme.text.secondary;
  }};
  width: 24px;
  height: ${({ ratio }) => (ratio ? "" + 24 * ratio + "px" : "24px")};
  ${(props) => extraAttr(props)}

  @media (min-width: 450px) {
    width: 40px;
    height: ${({ ratio }) => (ratio ? "" + 40 * ratio + "px" : "40px")};
  }
`;

const extraAttr = ({ onClick, href }) => {
  return onClick || href ? "cursor: pointer;" : "";
};

const StyledIcon = (props) => {
  const { light } = props;
  if (light) {
    return (
      <div>
        <IconAsMask {...props} />
      </div>
    );
  }
  return <IconAsImg {...props} />;
};

export default StyledIcon;
