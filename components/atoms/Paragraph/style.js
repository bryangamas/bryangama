import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 5%;
  }
`;
