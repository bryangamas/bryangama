import StyledIcon from "@components/shared/Icon/style";
import styled from "styled-components";
import Navigation from "../Navigation";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  left: 0;
  padding: 1.2rem 2rem;
  background-color: ${({ theme }) => theme.bg.inset};
  box-shadow: ${({ theme }) => theme.shadow.general};
  z-index: 1;
`;

export const FullMenu = styled(Navigation)`
  display: none;

  @media (min-width: 700px) {
    & {
      display: block;
      width: 100%;
    }

    & > ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      font-size: 1.8rem;
    }

    & > ul > li {
      margin-left: 4%;
    }
  }
`;

export const HamburguerMenu = styled(StyledIcon).attrs(() => ({
  src: "/icons/hamburger.svg",
  alt: "Open menu",
}))`
  @media (min-width: 700px) {
    display: none;
  }
`;
