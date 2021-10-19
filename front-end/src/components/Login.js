import React from 'react'
import { loginSchema } from '../Validations/LoginValidation'
import 'bootstrap/dist/css/bootstrap.min.css'

const Login = () => {



return (
       <form>
           <h1>Login</h1>
           <label>Username:
               <input type="text"
               name="user"
               placeholder="Username"
               />
               </label><br/>

               <label>Password:
                   <input type="password"
                   name="pass"
                   placeholder="Password"
                   />
                   </label><br/>
                   <input  type="submit" />
       </form>
    )
}

export default Login
