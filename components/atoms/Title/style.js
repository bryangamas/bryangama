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
  }
  
  
  @media (min-width: 700px) {
    &::after{
      left: 5.2rem;
      height: 1rem;
      width: 12rem;
    }
  }

  `;
};

const StyledTitle = styled.h2`
  font-size: ${({ bigger }) => (bigger ? "2.8rem" : "1.6rem")};
  width: 100%;
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

  @media (min-width: 700px) {
    font-size: ${({ bigger }) => (bigger ? "5.6rem" : "2.8rem")};
  }
`;

export default StyledTitle;
