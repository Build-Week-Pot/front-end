import React from 'react'
import { registerSchema } from '../Validations/RegisterValidation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'



const Register = () => {

    const  {register, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(registerSchema),
    });

    const submitForm = (data) => {
       
   // All data information typed in boxes are pushed to 'data'
    }

return (
        <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="shadow p-5 mb-9 rounded  w-50 mt-1" style={{backgroundColor: '#8ecae6'}}> 
            <h1 className="text-left pb-5" style={{fontWeight: '500'}}>Sign Up</h1>
            <form className="text-left" onSubmit={handleSubmit(submitForm)}> 
           
                <input
                 type="text"
                 name="name"
                 placeholder="Full Name"
                 {...register('name')}
                />
                
                 <p style={{color:"red"}}>  {errors.name?.message} </p>
                 <br/>

                 
                    <input className="border-1 shadow "
                     type="email"
                     name="email"
                     placeholder="Email"
                     {...register('email')}
                     />
               
                 <p style={{color:"red"}}>  {errors.email?.message} </p>
                 <br/>

                
                     <input className="border-1 shadow"
                     type="text"
                     name="username"
                     placeholder="Username"
                     {...register('username')}
                     />
               
                 <p style={{color:"red"}}>  {errors.username?.message} </p>
                 <br/>

                 
                     <input className="border-1 shadow"
                     type="password"
                     name="password"
                     placeholder="Password"
                    
                     {...register('password')}
                     />
                   
                     <p style={{color:"red"}}>  {errors.password?.message} </p>
                 <br/>

                
                     <input className="border-1 shadow"
                      type="password"
                     name="confirm_password"
                     placeholder='Confirm Password'
                     {...register('confirm_password')}
                     />
                 
                 <br/>
                 <p style={{color:"red"}}>  {errors.confirm_password && "Passwords do not match" } </p>
                <input type="submit"
                className="shadow p-1 mb-5 bg-black rounded mt-4 m-4"
                style={{width: '14%', height: '4vh', backgroundColor: 'black', color: 'white', borderRadius: '7%' }}/>
            </form>
        </div>
        </div>
    )
}

export default Register
