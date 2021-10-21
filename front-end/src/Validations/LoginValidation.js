import * as yup from "yup"


 const loginSchema = yup.object().shape({
    username: yup.string().min(5, 'Please enter a valid username').required('Please enter a valid username'),
    password: yup.string().min(6, 'Please enter a valid password').required('Please enter a valid password'),
})

export default loginSchema;