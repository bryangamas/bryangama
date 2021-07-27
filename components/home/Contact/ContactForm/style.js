import styled from "styled-components";
import { Form } from "formik";

export const StyledContactForm = styled(Form)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1rem;
  grid-row-gap: 2.8rem;

  & > * {
    margin-bottom: 2rem;
  }

  @media (min-width: 700px) {
    & > * {
      margin-top: 5%;
      margin-bottom: 5%;
    }
  }
`;

export const SendButton = styled.button.attrs(() => ({
  type: "submit",
}))`
  grid-column: 1 / 3;
  justify-self: center;
  margin-top: 6%;
  padding: 0.8rem 3.2rem;
  color: ${({ theme }) => theme.bg.primary};
  background: ${({ theme }) => theme.text.secondary};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;
  width: 50%;

  &:hover {
    background: ${({ theme }) => theme.text.primary};
  }

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
`;
