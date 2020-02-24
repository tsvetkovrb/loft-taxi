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

export const profileValidationSchema = yup.object().shape({
  cardNumber: yup
    .string()
    .matches(/^\d+$/, 'Only numbers')
    .min(16, 'Length must be 16 characters')
    .max(16, 'Length must be 16 characters')
    .required('This field is required'),
  expiryDate: yup
    .string()
    .required('This field is required')
    .max(5, 'Maximum 5 characters')
    .matches(/^\d{2}\/\d{2}$/, 'Must be like MM/YY'),
  cardName: yup
    .string()
    .trim()
    .required('This field is required')
    .matches(/^[A-Za-z _]*$/, 'Only latin characters can be used'),
  cvc: yup
    .string()
    .required('This field is required')
    .max(3, 'Maximum 3 numbers')
    .min(3, 'Minimum 3 numbers')
    .matches(/^\d+$/, 'Only numbers'),
});
