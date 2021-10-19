import React from 'react'
import { loginSchema } from '../Validations/LoginValidation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const Login = () => {

    const  {register, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(loginSchema),
    });

    const submitForm = (data) => {
        console.log(data)

    }


return (
       <form onSubmit={handleSubmit(submitForm)}>
           <h1>Login</h1>
           <label>Username:
               <input type="text"
               name="user"
               placeholder="Username"
               {...register('user')}
               />
               </label><br/>
               <p>  {errors.user?.message} </p>

               <label>Password:
                   <input type="password"
                   name="pass"
                   placeholder="Password"
                   {...register('pass')}
                   />
                   </label><br/>
                   <p>  {errors.pass?.message} </p>
                   <input  type="submit" />
       </form>
    )
}

export default Login
