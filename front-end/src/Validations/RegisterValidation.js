import * as yup from "yup"




 const registerSchema = yup.object().shape({
    fullName: yup.string().required("Please enter full name").trim() ,
    email: yup.string().email('Please enter a vaild email address').required('Email is required').trim() , 
    username: yup.string().min(5, 'Username must be at least 5 characters long').required('Username is required').trim() ,
    password: yup.string().min(6, 'Password must be at least 6 characters long').max(12, 'Must not exceed 12 characters').required('password is required').trim(),
    confirm_password: yup.string().min(6, 'Passwords must match').max(12, 'Must not exceed 12 characters').required('Passwords must match').trim(), 
    role: yup.string().oneOf(['organizer', 'guest'], 'You must select a role')
});


export default registerSchema