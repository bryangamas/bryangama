import React from "react";
import { StyledParagraph, ParagraphWrapper } from "./style";
import Icon from "@components/shared/Icon";

const Paragraph = ({ children, icon, className }) => {
  if (icon)
    return (
      <ParagraphWrapper className={className}>
        <Icon brightIfDark src={icon} />
        <StyledParagraph>{children}</StyledParagraph>
      </ParagraphWrapper>
    );

  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
