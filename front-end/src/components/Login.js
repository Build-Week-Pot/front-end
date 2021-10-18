import React from 'react'
import { loginSchema } from '../Validations/LoginValidation'

const Login = () => {

    const userLogin = async  (event) => {
        event.preventDefault()
        let dataLogin = {
            user:  event.target[0].value ,
            pass:  event.target[1].value,
        };
      const validate = await loginSchema.isValid(dataLogin);
      console.log(validate)
    }

return (
       <form onSubmit={userLogin}>
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
