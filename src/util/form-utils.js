import * as Yup from 'yup';
export const resetPasswordValidationSchema = Yup.object().shape({email: Yup.string().required("Email is required").email("Email is invalid"), })