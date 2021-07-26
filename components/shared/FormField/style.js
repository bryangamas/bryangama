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

  &::placeholder {
    font-size: 1.2rem;
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
  width: 100%;
  height: 9rem;
  resize: none;

  @media (min-width: 700px) {
    height: 12rem;
  }
`;

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
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  & > * {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media (min-width: 700px) {
    & > ${Label} {
      flex: 0.2 1 0;
    }
    & > input,
    & > textarea {
      flex: 0.8 1 0;
    }
  }
`;

export const LabelError = styled(Label)`
  position: absolute;
  top: calc(100% + 0.3rem);
  right: 0px;
  color: ${({ theme }) => theme.text.error};
  padding: 0px 1rem;
  align-self: flex-end;
`;
