import styled from "styled-components";

const StyledPageOptions = styled.section`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: calc(100% + 0.8rem);
  right: 2rem;

  & > * {
    margin-left: 0.8rem;
  }
`;

export default StyledPageOptions;
