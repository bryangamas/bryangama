import styled from "styled-components";

const StyledPageOptions = styled.section`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: calc(100% + 1.2rem);
  right: 2rem;

  & > * {
    margin-left: 1.5rem;
  }
`;

export default StyledPageOptions;
