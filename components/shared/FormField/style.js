import styled from "styled-components";

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
`;

export const TextArea = styled(Input).attrs(() => ({ as: "textarea" }))`
  width: 100%;
  height: 9rem;
  resize: none;
`;

export const Label = styled.span`
  font-size: 1.2rem;
  padding: 0.5rem 0px;
  color: ${({ theme }) => theme.text.primary};
`;

export const StyledFormField = styled.label`
  display: flex;
  justify-content: space-between;

  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
