import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.bg.secondary : theme.bg.primary};
  text-align: ${({ center }) => (center ? "center" : "left")};
  padding-top: 8.5rem;
  padding-bottom: 2rem;
  padding-right: 2.4rem;
  padding-left: 2.4rem;

  @media (min-width: 700px) {
    text-align: left;
    padding-right: 8rem;
  }

  & > * {
    max-width: 1000px;
  }
`;

export default StyledContainer;
