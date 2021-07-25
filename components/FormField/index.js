import React from "react";
import { StyledFormField, Label, Input, TextArea } from "./style";

const FormField = ({ field }) => {
  const { id, label, placeholder } = field;
  return (
    <StyledFormField>
      <Label>{label}</Label>
      {field.type === "textarea" ? (
        <TextArea id={id} placeholder={placeholder} />
      ) : (
        <Input id={id} placeholder={placeholder} />
      )}
    </StyledFormField>
  );
};

export default FormField;
