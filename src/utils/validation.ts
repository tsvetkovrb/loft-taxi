import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be an email')
    .required('This field is required'),
  password: yup
    .string()
    .min(6, 'Minimum 6 characters')
    .required('This field is required'),
});

export const signupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be an email')
    .required('This field is required'),
  name: yup.string().required('This field is required'),
  surname: yup.string().required('This field is required'),
  password: yup.string().required('This field is required'),
});
