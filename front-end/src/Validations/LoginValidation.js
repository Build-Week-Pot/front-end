import * as yup from "yup"


export const loginSchema = yup.object().shape({
    user: yup.string().min(5, 'Please enter a valid username').required('Please enter a valid username'),
    pass: yup.string().min(6, 'Please enter a valid password').required('Please enter a valid password'),
})