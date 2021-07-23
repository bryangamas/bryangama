import styled from "styled-components";
import StyledContainer from "../Container/style";

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 2%;
  }
`;

export const HomeContent = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePhoto = styled.div`
  width: 70%;
`;
