import * as yup from "yup"




export const registerSchema = yup.object().shape({
    name: yup.string().required("Please enter full name") ,
    email: yup.string().email('Please enter a vaild email address').required('Email is required') , 
    username: yup.string().min(5, 'Username must be at least 5 characters long').required('username is required') ,
    password: yup.string().min(6, 'Password must be at least 4 characters long').max(12).required('password is required'),
});