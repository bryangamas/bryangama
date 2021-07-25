import StyledContainer from "@components/Container/style";
import styled from "styled-components";

export const ProjectsContainer = styled(StyledContainer).attrs(() => ({
  id: "projects",
}))`
  & > * {
    margin-bottom: 3rem;
  }

  @media (min-width: 700px) {
    & > * {
      margin-bottom: 6rem;
    }
  }
`;
