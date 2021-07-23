import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0;
  left: 0;
  padding: 1.2rem 2rem;
  background-color: ${({ theme }) => theme.bg.inset};
  box-shadow: ${({ theme }) => theme.shadow.general};
  z-index: 1;
`;

export default StyledHeader;
