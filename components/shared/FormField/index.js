import React from "react";
import { useField } from "formik";
import { StyledFormField, Label, Input, TextArea, LabelError } from "./style";

const FormField = ({ field }) => {
  const { id, label, placeholder, type } = field;
  const [fieldFormik, meta] = useField({ name: id, type });

  return (
    <>
      <StyledFormField>
        <Label>{label}</Label>
        {field.type === "textarea" ? (
          <TextArea id={id} placeholder={placeholder} field={fieldFormik} />
        ) : (
          <Input id={id} placeholder={placeholder} field={fieldFormik} />
        )}
        {meta.touched && meta.error ? (
          <LabelError>{meta.error}</LabelError>
        ) : null}
      </StyledFormField>
    </>
  );
};

export default FormField;
