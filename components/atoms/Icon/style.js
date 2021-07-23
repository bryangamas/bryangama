import React from "react";
import styled from "styled-components";

const IconAsImg = styled.img`
  width: 26px;
  ${(props) => extraAttr(props)}
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
  width: 26px;
  height: ${({ ratio }) => (ratio ? "" + 26 * ratio + "px" : "26px")};
  ${(props) => extraAttr(props)}
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
