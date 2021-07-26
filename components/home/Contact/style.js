import Paragraph from "@components/shared/Paragraph";
import StyledContainer from "@components/shared/Container/style";
import styled from "styled-components";

export const ContactContainer = styled(StyledContainer).attrs(() => ({
  secondary: true,
  id: "contact",
}))`
  justify-content: space-around;
`;

export const ContactContent = styled.div`
  display: contents;

  @media (min-width: 700px) {
    display: flex;
    gap: 2rem;
    padding-left: 6%;
    padding-right: 4%;
    margin-bottom: 4rem;

    & > * {
      flex: 1 1 0;
    }
  }
`;

export const ContactIntroduction = styled(Paragraph).attrs(() => ({
  icon: "/icons/info/contact.svg",
}))`
  & > * {
    margin: 0 1.8rem;
  }
`;
