import StyledContainer from "@components/Container/style";
import styled from "styled-components";

export const ProjectsContainer = styled(StyledContainer).attrs(() => ({
  id: "projects",
}))`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-bottom: 3rem;
  }
`;
