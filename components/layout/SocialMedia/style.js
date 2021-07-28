import styled from "styled-components";

const StyledSocialMedia = styled.section`
  display: ${({ show }) => (show ? "flex" : "none")};

  & img:hover,
  & i:hover {
    transform: translateY(-10px);
  }

  @media (min-width: 700px) {
    position: fixed;
    top: 50%;
    right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 4.2rem;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

export default StyledSocialMedia;
