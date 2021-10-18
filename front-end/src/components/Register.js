import React from 'react'
import { registerSchema } from '../Validations/RegisterValidation'


const Register = () => {

    const userCreate = async  (event) => {
    event.preventDefault()
    let data = {
        name: event.target[0].value ,
        email:  event.target[1].value ,
        username:  event.target[2].value ,
        password:  event.target[3].value,
    };
  const validate = await registerSchema.isValid(data);
  console.log(validate)
}



 return (
        <div>
            <h1>Register</h1>
            <form onSubmit={userCreate}> 
             <label>Full Name: 
                <input
                 type="text"
                 name="name"
                 placeholder="Full Name"
                />
                 </label>
                 <br/>

                 <label>Email:
                    <input
                     type="email"
                     name="email"
                     placeholder="Email"
                     />
                 </label>
                 <br/>

                 <label>Username:
                     <input
                     type="text"
                     name="username"
                     placeholder="Username"/>
                 </label>
                 <br/>

                 <label>Password:
                     <input
                     type="password"
                     name="password"
                     placeholder="Password"/>
                 </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Register
