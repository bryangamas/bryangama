import styled from "styled-components";

export const StyledParagraph = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.primary};

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
`;

export const ParagraphWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 3.6rem;
  }
`;
