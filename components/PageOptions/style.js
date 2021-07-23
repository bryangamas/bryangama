import styled from "styled-components";

const StyledPageOptions = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: calc(100% + 1.2rem);
  right: 2rem;

  & > * {
    margin-left: 1.5rem;
  }
`;

export default StyledPageOptions;
