import Paragraph from "@components/shared/Paragraph";
import { StyledParagraph } from "@components/shared/Paragraph/style";
import styled from "styled-components";
import Image from "next/image";
import { ProjectOptionsContainer } from "../ProjectOptions/style";

export const StyledProjectCard = styled.article`
  --big-font-size: 1.6rem;
  --font-size: 1.2rem;
  --small-font-size: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? theme.bg.secondary : "#fff"};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.general};

  @media (min-width: 700px) {
    flex-direction: row;
    --big-font-size: 2.4rem;
    --font-size: 1.6rem;
    --small-font-size: 1.4rem;
    border-radius: 40px;

    & > * {
      flex: 1 1 0;
    }
  }
`;

export const ProjectPhoto = styled.figure`
  position: relative;
  width: 100%;
  max-width: 600px;
  background-color: inherit;
  transition: background-color 0.3s;

  & > div > img {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  & ${ProjectOptionsContainer} {
    visibility: hidden;
    opacity: 0;
    transition: opacity, visibility 0.3s ease-in-out;
  }

  &:hover {
    background-color: ${({ theme }) =>
      theme.isDarkMode ? theme.bg.inset : theme.bg.secondary};

    & > div > img {
      opacity: 0.5;
    }

    & ${ProjectOptionsContainer} {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 700px) {
    & > div {
      transform: translateY(-50%);
      top: 50%;
    }
  }
`;

export const ProjectInfo = styled.section`
  padding-top: 0.5rem;
  padding-bottom: 1.6rem;
  padding-left: 2.6rem;
  padding-right: 2.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  & > * {
    margin-bottom: 1.4rem;
  }

  @media (min-width: 700px) {
    padding: 2rem 1.4rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: var(--big-font-size);
  color: ${({ theme }) => theme.text.primary};
`;

export const ProjectDescription = styled.p`
  font-size: var(--font-size);
  color: ${({ theme }) => theme.text.secondary};
`;

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 186px);
  grid-row-gap: 0.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const StyledFeatureItem = styled(Paragraph).attrs(() => ({
  icon: "/icons/check.svg",
}))`
  & > * {
    margin-left: 0px;
    margin-right: var(--small-font-size);
  }

  & > ${StyledParagraph} {
    font-size: var(--font-size);
  }

  & > img,
  & i {
    width: var(--small-font-size);
    height: var(--small-font-size);
  }
`;

export const FeatureItem = ({ children }) => {
  return (
    <li>
      <StyledFeatureItem>{children}</StyledFeatureItem>
    </li>
  );
};

export const ToolList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: var(--small-font-size);
`;

export const ToolItem = styled.li`
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.primary};
  padding: 0.4rem 0.8rem;
  margin-right: 1rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.shadow.general};

  &:hover {
    background: ${({ theme }) => theme.bg.secondary};
  }
`;
