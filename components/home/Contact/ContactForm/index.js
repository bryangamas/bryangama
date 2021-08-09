import FormField from "@components/shared/FormField";
import { StyledContactForm, SendButton } from "./style";
import { Formik } from "formik";
import { getValidationSchema } from "utils/validationUtil";

const ContactForm = ({
  fields,
  sendMessage,
  requiredMessage,
  setSucessOptions,
}) => {
  const { validation, initialValues } = getValidationSchema(
    fields,
    requiredMessage
  );

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await fetch("/api/mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    setSubmitting(false);
    resetForm(true);
    setSucessOptions({
      name: values.name,
      showSucessMessage: true,
    });
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
