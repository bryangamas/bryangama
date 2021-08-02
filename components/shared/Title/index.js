import React from "react";
import StyledTitle from "./style";

export const MainTitle = ({ children }) => {
  return (
    <StyledTitle as="h1" bigger highlight>
      {children}
    </StyledTitle>
  );
};

export const IntroTitle = ({ children }) => {
  return <StyledTitle as="span">{children}</StyledTitle>;
};

export const Subtitle = ({ children }) => {
  return (
    <StyledTitle as="h2" auxiliary>
      {children}
    </StyledTitle>
  );
};

export const SectionTitle = ({ children }) => {
  return (
    <StyledTitle as="h2" underline>
      {children}
    </StyledTitle>
  );
};
