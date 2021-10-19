import React from 'react'
import { registerSchema } from '../Validations/RegisterValidation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'


const Register = () => {

    const  {register, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(registerSchema),
    });

    const submitForm = (data) => {
        console.log(data)

    }



 return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(submitForm)}> 
           
                <input
                 type="text"
                 name="name"
                 placeholder="Full Name"
                 {...register('name')}
                />
                
                 <p>  {errors.name?.message} </p>
                 <br/>

                 
                    <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     {...register('email')}
                     />
               
                 <p>  {errors.email?.message} </p>
                 <br/>

                
                     <input
                     type="text"
                     name="username"
                     placeholder="Username"
                     {...register('username')}
                     />
               
                 <p>  {errors.username?.message} </p>
                 <br/>

                 
                     <input
                     type="password"
                     name="password"
                     placeholder="Password"
                    
                     {...register('password')}
                     />
                   
                     <p>  {errors.password?.message} </p>
                 <br/>

                
                     <input type="password"
                     name="confirm_password"
                     placeholder='Confirm Password'
                     {...register('confirm_password')}
                     />
                 
                 <br/>
                 <p>  {errors.confirm_password && "Passwords don't match" } </p>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Register
