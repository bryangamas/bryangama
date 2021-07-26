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

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5%;
  }

  @media (min-width: 700px) {
    & > * {
      margin-top: 4%;
      margin-bottom: 4%;
    }
  }
`;

export const SendButton = styled.button.attrs(() => ({
  type: "send",
}))`
  align-self: center;
  margin-top: 6%;
  padding: 0.8rem 3.2rem;
  color: ${({ theme }) => theme.bg.primary};
  background: ${({ theme }) => theme.text.secondary};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  box-shadow: ${({ theme }) => theme.shadow.general};

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
`;
