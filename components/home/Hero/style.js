import styled from "styled-components";
import StyledContainer from "@components/shared/Container/style";

export const HeroContainer = styled(StyledContainer).attrs(() => ({
  id: "home",
}))`
  justify-content: space-around;
  position: relative;
  height: 100vh;
  max-height: 70rem;
`;

export const HeroContent = styled.main`
  display: contents;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5%;

  & > * {
    margin-bottom: 5%;
  }
`;

export const ProfilePhoto = styled.div`
  width: 70%;
  max-width: 200px;
  @media (min-width: 700px) {
    max-width: 350px;
  }
`;
