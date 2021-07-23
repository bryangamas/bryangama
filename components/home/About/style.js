import styled from "styled-components";
import StyledContainer from "@components/Container/style";

export const AboutContent = styled(StyledContainer).attrs(() => ({
  id: "about",
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 2%;
  }
`;

export const AboutSkills = styled.div``;
