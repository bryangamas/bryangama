import styled from "styled-components";

const StyledContainer = styled.section`
  min-height: 100vh;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.bg.secondary : theme.bg.primary};
  text-align: ${({ center }) => (center ? "center" : "left")};
  padding-top: 9.5rem;
  padding-bottom: 7rem;
  padding-right: 2.4rem;
  padding-left: 2.4rem;
`;

export default StyledContainer;
