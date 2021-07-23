import styled from "styled-components";

const StyledSocialMediaDesktop = styled.section`
  display: none;

  @media (min-width: 700px) {
    position: fixed;
    top: 50%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transform: translateY(-50%);

    & > * {
      margin-bottom: 4.2rem;
    }
  }
`;

export default StyledSocialMediaDesktop;
