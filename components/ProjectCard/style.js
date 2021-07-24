import Paragraph from "@components/atoms/Paragraph";
import { StyledParagraph } from "@components/atoms/Paragraph/style";
import styled from "styled-components";

export const StyledProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 30rem;
  background-color: ${({ theme }) =>
    theme.isDarkMode ? theme.bg.secondary : "#fff"};
  border-radius: 10px;
`;

export const ProjectPhoto = styled.img`
  width: 100%;
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
`;

export const ProjectTitle = styled.h3`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.text.primary};
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text.secondary};
`;

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 0.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const StyledFeatureItem = styled(Paragraph).attrs(() => ({
  icon: "/icons/check.svg",
}))`
  & > * {
    margin-left: 0px;
    margin-right: 1.2rem;
  }

  & > ${StyledParagraph} {
    font-size: 1.2rem;
  }

  & > img,
  & > i {
    width: 1.2rem;
    height: 1.2rem;
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

  & > li {
    margin-right: 1rem;
  }
`;

export const ToolItem = styled.li`
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.bg.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
`;
