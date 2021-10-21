import { useState, useEffect } from 'react';



const useForm = () => {
    const [values, setValues] = useState({
        fullName: "",
         email: "",
         username: "",
         password: "",
         confirm_password: "",
         role: ""
    })
    const [errors,setErrors] = useState({})


    const handleChange = e => {
        const {name, value } = e.target
        setValues({
        ...values,
        [name]: value
        })
    }
return {handleChange}

};

export default useForm;