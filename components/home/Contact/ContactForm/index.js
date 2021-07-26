import React from "react";
import FormField from "@components/shared/FormField";
import { StyledContactForm, SendButton } from "./style";
import { Formik } from "formik";
import { getValidationSchema } from "utils/validationUtil";

const ContactForm = ({ fields, sendMessage, requiredMessage }) => {
  const { validation, initialValues } = getValidationSchema(
    fields,
    requiredMessage
  );

  const handleSubmit = (e) => {
    console.log(e);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={validation}
    >
      <StyledContactForm>
        {Object.entries(fields).map(([key, field]) => {
          return <FormField key={key} field={{ ...field, id: key }} />;
        })}
        <SendButton>{sendMessage}</SendButton>
      </StyledContactForm>
    </Formik>
  );
};

export default ContactForm;
