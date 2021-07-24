const { default: styled } = require("styled-components");

export const StyledSkillsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > li {
    margin: 0 1.4rem;
  }

  @media (min-width: 700px) {
    justify-content: flex-start;

    & > li {
      margin-left: 0px;
      margin-right: 3.2rem;
    }
  }
`;

export const SkillItem = styled.li``;
