import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import loginSchema from '../Validations/LoginValidation'
import * as yup from 'yup'

const initialValues = { username: '', password: ''};


const Login = () => {

    const [ error, setError ] = useState('');
    const [ formValues, setFormValues ] = useState(initialValues);
    const { push } = useHistory()
    const [disabled, setDisabled] = useState(true)
    const [wrong, setWrong ] = useState({ 
       username: '', 
       password: '',
      }) 




const setFormErrors = (name, value) => {
    yup.reach(loginSchema,name).validate(value)
    .then(() => setWrong({ ...wrong, [name]: '' }))
    .catch(err =>setWrong({ ...wrong , [name]: err.errors[0] }))
}




    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setFormValues({...formValues, [name]: valueToUse});
    }


    useEffect(() => {
       loginSchema.isValid(formValues).then(valid => setDisabled(!valid) )
    }, [formValues])



    const errorSubmit = (e) => {
        change(e)
        handleChanges(e)
        
 
     }



    const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://potluckplanner7.herokuapp.com/api/user/login', formValues)
            .then(res=> {
                window.localStorage.setItem('token', res.data.token);
                push('/view');
            })
            .catch(err => {
                console.log(err);
                setError('User name or password is incorrect');
            })
    }


return (
    <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="shadow p-5 mb-20 rounded  w-50 mt-1" style={{backgroundColor: '#8ecae6', border:'1px solid black'}}> 
       <form className="text-center" onSubmit={handleSubmit}>
           <h1>Login</h1>

           <img style={{color: 'black', width: '3.4%',paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/person.png`} alt="logo"/>
               <input type="text"
               name="username"
               placeholder="Username"
               id="username"
               onChange={errorSubmit}
               value={formValues.username}
               />
                 <div className="text-danger ml-4">
                     <div>{wrong.username}</div>
                     </div>
          
               <p style={{color:"red"}}> </p>

               <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/lock.png`} alt="logo"/>
                   <input type="password"
                   name="password"
                   placeholder="Password"
                   id="password"
                   onChange={errorSubmit}
                   value={formValues.password}
                   />
                   <div className="text-danger ml-4">
                     <div>{wrong.password}</div>
                     </div>
        
                   <p style={{color:"red"}}></p>

                   <a className="text-black" href="null">Forgot Password</a><br/>

                   <input  type="submit"
                   disabled={disabled}
                   className="m-5"
                   style={{width: '14%', height: '4vh', backgroundColor: 'black', color: 'white', borderRadius: '7%' }}/> <br/>


        <img style={{width: '3.8%', paddingRight:'2px', paddingBottom:'4px', marginRight: '30px', marginTop: '30px'}} src={`${process.env.PUBLIC_URL}/assets/fb.png`} alt="logo"/>
        <img style={{width: '3.4%',paddingRight:'2px', paddingBottom:'4px', marginRight: '30px',  marginTop: '30px'}} src={`${process.env.PUBLIC_URL}/assets/google.png`} alt="logo"/>
        <img style={{width: '3.7%',paddingRight:'2px', paddingBottom:'4px', marginRight: '30px',  marginTop: '30px'}} src={`${process.env.PUBLIC_URL}/assets/twitter.png`} alt="logo"/>
        <img style={{width: '3.7%',paddingRight:'5px', paddingBottom:'4px', marginRight: '30px',  marginTop: '30px'}} src={`${process.env.PUBLIC_URL}/assets/github.png`} alt="logo"/>
       
       
       
       
       
       </form>  
       </div>
       </div>
    )
}

export default Login
