import React from "react";
import { StyledParagraph, ParagraphWrapper } from "./style";
import Icon from "../Icon";

const Paragraph = ({ children, icon }) => {
  if (icon)
    return (
      <ParagraphWrapper>
        <Icon src={icon} />
        <StyledParagraph>{children}</StyledParagraph>
      </ParagraphWrapper>
    );

  return <StyledParagraph>{children}</StyledParagraph>;
};

export default Paragraph;
