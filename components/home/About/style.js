import styled from "styled-components";
import StyledContainer from "@components/Container/style";

export const AboutContent = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const AboutMe = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 5%;
  }
`;

export const AboutSkills = styled.div``;
