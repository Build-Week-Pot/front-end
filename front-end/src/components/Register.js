import React, {useState, useEffect} from 'react'
import { registerSchema } from '../Validations/RegisterValidation'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'







const Register = () => {

    const url =""
    const [data, setData] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",

    })

    const submitForm = (data) => {
 
     
   // All data information typed in boxes are pushed to 'data'
    }

    
    const  {register, handleSubmit, formState: { errors}} = useForm({
        resolver: yupResolver(registerSchema),
    });



return (
        <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="shadow p-5 mb-20 rounded  w-50 mt-1" style={{backgroundColor: '#8ecae6', border:'1px solid black'}}> 
            <h1 className="text-left pb-5" style={{fontWeight: '500'}}>Sign Up</h1>
            <form className="text-left" onSubmit={handleSubmit(submitForm)}>

            <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/person.png`} alt="logo"/>
                <input className="border-1 shadow"

                 id="fullName"
                 type="text"
                 name="fullName"
                 placeholder="Full Name"
                 {...register('name')}
                />
                
                 <p style={{color:"red"}}>  {errors.name?.message} </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/email.jpg`} alt="logo"/>
                    <input className="border-1 shadow"
    
                    id="email"
                    type="email"
                     name="email"
                     placeholder="Email"
                     {...register('email')}
                     />
               
                 <p style={{color:"red"}}>  {errors.email?.message} </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/username.png`} alt="logo"/>
                     <input className="border-1 shadow"
    
                     id="username"
                     type="text"
                     name="username"
                     placeholder="Username"
                     {...register('username')}
                     />
               
                 <p style={{color:"red"}}>  {errors.username?.message} </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/lock.png`} alt="logo"/>
                     <input className="border-1 shadow"
    
                     id="password"
                     type="password"
                     name="password"
                     placeholder="Password"
                    
                     {...register('password')}
                     />
                   
                     <p style={{color:"red"}}>  {errors.password?.message} </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/key.jpg`} alt="logo"/>
                     <input className="border-1 shadow"
                      type="password"
                     name="confirm_password"
                     placeholder='Confirm Password'
                     {...register('confirm_password')}
                     />
                 
                 <br/>
                 <p style={{color:"red"}}>  {errors.confirm_password && "Passwords do not match" } </p>
                
                <label className="p-3">Organizer
                <input className="m-2"
                type="radio"
                name="role"
                />
                </label>
                <label className="p-3">Guest
                <input className="m-2"
                type="radio"
                name="role"
                />
                </label>
                <br/>




                <input type="submit"
                className="shadow p-1 mb-5 bg-black rounded mt-4 m-4 m-5"
                style={{width: '14%', height: '5vh', backgroundColor: 'black', color: 'white', borderRadius: '7%' }}/><br/>
           
        <img style={{color: 'black', width: '3.8%', marginRight: '3px', paddingRight:'2px', paddingBottom:'4px', marginRight: '40px'}} src={`${process.env.PUBLIC_URL}/assets/fb.png`} alt="logo"/>
        <img style={{color: 'black', width: '3.4%', marginRight: '3px', paddingRight:'2px', paddingBottom:'4px', marginRight: '40px'}} src={`${process.env.PUBLIC_URL}/assets/google.png`} alt="logo"/>
        <img style={{color: 'black', width: '3.7%', marginRight: '3px', paddingRight:'2px', paddingBottom:'4px', marginRight: '40px'}} src={`${process.env.PUBLIC_URL}/assets/twitter.png`} alt="logo"/>
        <img style={{color: 'black', width: '3.7%', marginRight: '1px', paddingRight:'4px', paddingBottom:'4px', marginRight: '40px'}} src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="logo"/>
      
        
            </form>
        </div>
        </div>

    )
}

export default Register
