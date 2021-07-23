import styled from "styled-components";

const style = 2;

const StyledTitle = styled.h2`
  font-size: ${({ bigger }) => (bigger ? "3.6rem" : "1.6rem")};
  color: ${(props) => {
    const { theme, highlight, auxiliary } = props;
    if (highlight) return theme.text.highlight;
    if (auxiliary) return theme.text.auxiliary;
    return theme.text.primary;
  }};
`;

export default StyledTitle;
