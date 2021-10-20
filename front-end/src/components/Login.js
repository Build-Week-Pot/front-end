import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Login = () => {

const [log, setLog] = useState({
    username:"",
    password:""
})

const handle = (event) => {
    const newData = { ...log }
    newData[event.target.id] = event.target.value
    setLog(newData)
    console.log(newData)
}

const submitForm = ()=> {
    axios.post("https://potluckplanner7.herokuapp.com/api/user/login", {
        username: log.username,
        password: log.password,
    }).then(res => {
        console.log(res.data)
    })
}





    const  { handleSubmit, formState: { errors}} = useForm({
    
    });

  


return (
    <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="shadow p-5 mb-20 rounded  w-50 mt-1" style={{backgroundColor: '#8ecae6', border:'1px solid black'}}> 
       <form className="text-center" onSubmit={handleSubmit(submitForm)}>
           <h1>Login</h1>

           <img style={{color: 'black', width: '3.4%',paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/person.png`} alt="logo"/>
               <input type="text"
               name="username"
               placeholder="Username"
               id="username"
               onChange={(event) =>handle(event)}
            //    {...register('user')}
               />
            <br/>
               <p style={{color:"red"}}>  {errors.user?.message} </p>

               <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/lock.png`} alt="logo"/>
                   <input type="password"
                   name="password"
                   placeholder="Password"
                   id="password"
                   onChange={(event) =>handle(event)}
                //    {...register('pass')}
                   />
          <br/>
                   <p style={{color:"red"}}>  {errors.pass?.message} </p>

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
