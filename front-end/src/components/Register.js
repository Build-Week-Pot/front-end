import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Register</h1>
            <form> 
             <label>Full Name: 
                <input
                 type="text"
                 name="fullName"
                />
                 </label>

                 <label>Email:
                    <input
                     type="email"
                     name="email"
                     />
                 </label>

                 <label>Password:
                     <input
                     type="password"
                     name="password"/>
                 </label>
                 <button>Register</button>
            </form>
        </div>
    )
}

export default Register
