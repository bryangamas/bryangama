import styled from "styled-components";
import StyledContainer from "@components/shared/Container/style";
import SkillsList from "@components/shared/SkillsList";

export const AboutContent = styled(StyledContainer).attrs(() => ({
  id: "about",
}))`
  justify-content: space-around;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 2%;
  }
`;

export const AboutSkills = styled.div``;
export const FullSkillsList = styled(SkillsList)`
  margin-left: 3rem;
`;
