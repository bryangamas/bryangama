const { default: styled } = require("styled-components");

export const NavigationItem = styled.li`
  color: ${({ theme }) =>
    theme.isDarkMode ? theme.text.primary : theme.bg.primary};

  &.primary {
    background-color: #eee;
    padding: 0.8rem 1.2rem;
    color: ${({ theme }) => theme.bg.inset};
    border-radius: 20px;
  }
`;
