import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  left: 0;
  background-color: ${({ theme }) => theme.bg.inset};
  padding: 1.2rem 2rem;
  z-index: 1;
`;

export default StyledHeader;
