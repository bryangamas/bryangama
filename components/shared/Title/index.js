import React from "react";
import StyledTitle from "./style";

export const Title = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export const MainTitle = ({ children }) => {
  return (
    <StyledTitle bigger highlight>
      {children}
    </StyledTitle>
  );
};

export const Subtitle = ({ children }) => {
  return <StyledTitle auxiliary>{children}</StyledTitle>;
};

export const SectionTitle = ({ children }) => {
  return <StyledTitle underline>{children}</StyledTitle>;
};
