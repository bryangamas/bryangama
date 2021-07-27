import Paragraph from "@components/shared/Paragraph";
import StyledContainer from "@components/shared/Container/style";
import styled from "styled-components";

export const ContactContainer = styled(StyledContainer).attrs(() => ({
  secondary: true,
  id: "contact",
}))`
  padding-bottom: 1.5rem;

  & > * {
    margin-bottom: 4rem;
  }

  @media (min-width: 700px) {
    & > * {
      margin-bottom: 6rem;
    }
  }
`;

export const ContactContent = styled.div`
  display: contents;

  & > * {
    margin-bottom: 4rem;
  }

  @media (min-width: 700px) {
    display: flex;
    gap: 2rem;
    padding-left: 6%;
    padding-right: 4%;

    & > * {
      flex: 1 1 0;
      margin-bottom: 6rem;
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

export const SuccessMessage = styled(Paragraph)`
  display: ${({ showSucessMessage }) => (showSucessMessage ? "block" : "none")};
  /* position: absolute; */
  z-index: 2;
  background: #fff;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  color: #212426;
  /* bottom: 7.5rem; */

  @media (min-width: 700px) {
    /* bottom: initial;
    top: 20%; */
  }
`;
