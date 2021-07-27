import styled from "styled-components";

export const Label = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 0px;
  color: ${({ theme }) => theme.text.primary};

  @media (min-width: 700px) {
    font-size: 1.6rem;
    padding: 1rem 0px;
  }
`;

export const StyledFormField = styled.label`
  display: contents;
`;

export const Input = styled.input.attrs(({ id, type, field }) => ({
  id,
  name: id,
  type: type || "text",
  ...field,
}))`
  font-size: 1.2rem;
  font-family: sans-serif;
  background-color: #fff;
  border: none;
  color: #212426;
  border-radius: 6px;
  appearance: none;
  box-shadow: ${({ theme }) => theme.shadow.general};
  outline: none;
  padding: 0.8rem 1rem;
  width: 100%;

  &::placeholder {
    font-size: 1.2rem;
    color: #b0b0b0;
  }

  @media (min-width: 700px) {
    padding: 1.2rem 2rem;
    font-size: 1.6rem;

    &::placeholder {
      font-size: 1.6rem;
    }
  }
`;

export const TextArea = styled(Input).attrs(() => ({ as: "textarea" }))`
  /* width: 100%; */
  height: 9rem;
  resize: none;

  @media (min-width: 700px) {
    height: 12rem;
  }
`;

export const FieldInput = styled.div`
  position: relative;
`;

export const LabelError = styled(Label)`
  position: absolute;
  top: calc(100% + 0.25rem);
  right: 0px;
  color: ${({ theme }) => theme.text.error};
  padding: 0px;
`;
