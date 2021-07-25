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
`;

export const ContactIntroduction = styled(Paragraph).attrs(() => ({
  icon: "/icons/info/contact.svg",
}))``;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5%;
  }
`;

export const ContactInput = styled.label``;
