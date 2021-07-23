import styled from "styled-components";
import StyledContainer from "@components/Container/style";

export const HeroContainer = styled(StyledContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
    margin-bottom: 2%;
  }
`;

export const ProfilePhoto = styled.div`
  width: 70%;
  max-width: 200px;
  @media (min-width: 700px) {
    max-width: 350px;
  }
`;
