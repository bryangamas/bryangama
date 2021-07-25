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
    gap: 4.2rem;
    transform: translateY(-50%);

    & > * {
      opacity: 0.8;
    }

    & > *:hover {
      opacity: 1;
      transition: opacity 0.2s ease-in;
    }
  }
`;

export default StyledSocialMediaDesktop;
