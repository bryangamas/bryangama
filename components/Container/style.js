import styled from "styled-components";

const StyledContainer = styled.section`
  min-height: 100vh;
  min-width: 320px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.bg.secondary : theme.bg.primary};
  text-align: ${({ center }) => (center ? "center" : "left")};
  padding-top: 9.5rem;
  padding-bottom: 4rem;
  padding-right: 2.4rem;
  padding-left: 2.4rem;

  @media (min-width: 450px) {
    text-align: left;
  }

  & > * {
    max-width: 1000px;
  }
`;

export default StyledContainer;
