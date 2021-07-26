import styled from "styled-components";
import { Form } from "formik";

export const StyledContactForm = styled(Form)`
  display: flex;
  flex-direction: column;

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
  align-self: center;
  margin-top: 6%;
  padding: 0.8rem 3.2rem;
  color: ${({ theme }) => theme.bg.primary};
  background: ${({ theme }) => theme.text.secondary};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: inherit;

  &:hover {
    background: ${({ theme }) => theme.text.primary};
  }

  @media (min-width: 700px) {
    font-size: 1.6rem;
  }
`;
