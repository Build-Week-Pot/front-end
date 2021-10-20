import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const initialValues = { username: '', password: ''};


const Login = () => {

    const [ error, setError ] = useState('');
    const [ formValues, setFormValues ] = useState(initialValues);
    const { push } = useHistory()

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
               onChange={handleChanges}
               value={formValues.username}
               />
            <br/>
               <p style={{color:"red"}}> </p>

               <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/lock.png`} alt="logo"/>
                   <input type="password"
                   name="password"
                   placeholder="Password"
                   id="password"
                   onChange={handleChanges}
                   value={formValues.password}
                   />
          <br/>
                   <p style={{color:"red"}}></p>

                   <a className="text-black" href="null">Forgot Password</a><br/>

                   <input  type="submit"
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
