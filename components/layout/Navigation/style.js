const { default: styled } = require("styled-components");

export const NavigationItem = styled.li`
  color: ${({ theme }) =>
    theme.isDarkMode ? theme.text.primary : theme.bg.primary};
  cursor: pointer;

  &.primary > a {
    background-color: #eee;
    padding: 0.8rem 1.2rem;
    color: ${({ theme }) => theme.bg.inset};
    border-radius: 20px;
  }

  &.primary:hover > a {
    background-color: #fff;
  }

  &.underline {
    position: relative;
  }

  &.underline::after {
    content: "";
    position: absolute;
    transform: translate(-50%) scaleX(0);
    transform-origin: 0% 50%;
    height: 2px;
    width: 50px;
    top: 3rem;
    left: 50%;
    background-color: #eee;
  }

  &.underline:hover::after {
    transform: translate(-50%) scaleX(1);
    transition: transform 0.3s;
  }
`;
