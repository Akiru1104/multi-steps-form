import { isEmpty } from "./validation-utils";

export const validateStepOne = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.lastName)) {
    errors.lastName = "Овог нэр оруулна уу";
  }
  if (isEmpty(formValues.firstName)) {
    errors.firstName = "Өөрийн нэрээ оруулна уу";
  }

  if (isEmpty(formValues.username)) {
    errors.username = "Хэрэглэгчийн нэрээ оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid: true };
};

export const validateStepTwo = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.email)) {
    errors.email = "Мэйл хаягаа оруулна уу";
  }
  if (isEmpty(formValues.phoneNumber)) {
    errors.phoneNumber = "Утасны дугаараа оруулна уу";
  }
  if (isEmpty(formValues.password)) {
    errors.password = "Нууц үгээ оруулна уу";
  }
  if (isEmpty(formValues.confirmPassword)) {
    errors.confirmPassword = "Нууц үгээ давтаж оруулна уу";
  }

  const isValid = Object.keys(errors).length === 0;

  return { errors, isValid };
};

export const validateStepThree = (formValues) => {
  const errors = {};

  if (isEmpty(formValues.dateOfBirth)) {
    errors.dateOfBirth = "";
  }
};
