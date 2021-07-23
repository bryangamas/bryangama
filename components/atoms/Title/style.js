import styled from "styled-components";

const line = (theme) => {
  return `
  position: relative;
  margin-bottom: 5%;

  &::after{
    content: "";
    position: absolute;
    top: calc(100% + 10px);
    left: 2.4rem;
    background: ${theme.text.highlight};
    width: 8rem;
    height: 0.5rem;
    border-radius: 20px;
  }`;
};

const StyledTitle = styled.h2`
  font-size: ${({ bigger }) => (bigger ? "3.6rem" : "1.6rem")};
  color: ${(props) => {
    const { theme, highlight, auxiliary } = props;
    if (highlight) return theme.text.highlight;
    if (auxiliary) return theme.text.auxiliary;
    return theme.text.primary;
  }};
  ${({ underline, theme }) => {
    if (underline) {
      return line(theme);
    }
  }}
`;

export default StyledTitle;
