import * as Yup from "yup";

export const getValidationSchema = (fields, requiredMessage) => {
  let initialValues = {};
  let validation = {};

  Object.entries(fields).map(([id, field]) => {
    let validator = {};
    validator = Yup.string();
    if (field.required) {
      validator = validator.required(requiredMessage);
    }
    if (field.type == "email") {
      validator = validator.email(field.typeError);
    }
    validation[id] = validator;
    initialValues[id] = "";
  });

  return {
    validation: Yup.object(validation),
    initialValues,
  };
};
