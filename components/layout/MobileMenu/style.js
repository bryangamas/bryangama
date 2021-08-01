import Icon from "@components/shared/Icon";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${({ menuVisible }) => (menuVisible ? "hidden" : "initial")};
  }
`;

export const MobileMenuContainer = styled.aside`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.bg.inset};
  width: 100vw;
  height: 100vh;
  z-index: 2;
  padding: 6rem 5.4rem;

  ${({ menuVisible }) => (!menuVisible ? "transform: translate(100vw)" : "")};
  transition: transform 0.4s ease-in;

  & > nav > ul {
    display: inline-flex;
    flex-direction: column;
    font-size: 2.4rem;
  }

  & > nav > ul > li {
    margin: 1.8rem 0;
    align-self: flex-start;
  }

  /* Social Media */
  & > section {
    display: flex;
    align-self: center;
  }

  /* Social Media Icons */
  & > section img,
  & > section i {
    width: 3.2rem;
    height: 3.2rem;
    margin: 0 2rem;
  }
`;

export const CloseMenuIcon = styled(Icon).attrs(() => ({
  src: "/icons/close.svg",
  alt: "Close menu",
}))`
  position: absolute;
  top: 4rem;
  right: 2.5rem;
`;
