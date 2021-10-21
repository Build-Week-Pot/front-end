import React, {useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import RegisterValidation from '../Validations/RegisterValidation';
import * as yup from 'yup'

const initialValues = { 
    fullName: '',
    email: '',
    username: '', 
    password: '',
    role: ''
}


const Register = () => {

    const [ error, setError ] = useState('');          // originally was  const [ error, setError ] = useState(');
    const [ formValues, setFormValues ] = useState(initialValues);
   
    const [wrong, setWrong ] = useState({ 
     fullName: '',
    email: '',
    username: '', 
    password: '',
    confirm_password: '',
    role: ''}) 
    

    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory()

    const handleChanges = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }


const setFormErrors = (name, value) => {
    yup.reach(RegisterValidation,name).validate(value)
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
        RegisterValidation.isValid(formValues).then(valid => setDisabled(!valid) )
    }, [formValues])


    
     const handleSubmit = e => {
        e.preventDefault();
        axios.post('https://potluckplanner7.herokuapp.com/api/user/register', formValues)
            .then(res=> {
                push('/view');
            })
            .catch(err => {
                console.log(err);
                setError('Username or password is incorrect');
            })
            
    }

    const onSubmit =(e) => {
        handleSubmit(e);
        change(e);
        handleChanges(e)
        
    }

    const errorSubmit = (e) => {
       change(e)
       handleChanges(e)

    }



return (
        <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="shadow p-5 mb-20 rounded  w-50 mt-1" style={{backgroundColor: '#8ecae6', border:'1px solid black'}}> 
            <h1 className="text-left pb-5" style={{fontWeight: '500'}}>Sign Up</h1>
            <form className="text-left" onSubmit={onSubmit}>

            <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/person.png`} alt="logo"/>
                <input className="border-1 shadow"

                 id="fullName"
                 type="text"
                 name="fullName"
                 placeholder="Full Name"
                 value={formValues.fullName}
                 onChange={errorSubmit}
                 />
                 <div className="text-danger ml-4">
                     <div>{wrong.fullName}</div>
                     </div>

                
                 <p style={{color:"red"}}></p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/email.jpg`} alt="logo"/>
                    <input className="border-1 shadow"
    
                    id="email"
                    type="email"
                     name="email"
                     placeholder="Email"
                     value={formValues.email}
                     onChange={errorSubmit}
                     />
                      <div className="text-danger ml-4">
                     <div>{wrong.email}</div>
                     </div>
               
                 <p style={{color:"red"}}> </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/username.png`} alt="logo"/>
                     <input className="border-1 shadow"
    
                     id="username"
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={formValues.username}
                     onChange={errorSubmit}
                     />      

                    <div className="text-danger ml-4">
                     <div>{wrong.username}</div>
                     </div>

                 <p style={{color:"red"}}></p>
                 <br/>
                

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/lock.png`} alt="logo"/>
                     <input className="border-1 shadow"
    
                     id="password"
                     type="password"
                     name="password"
                     placeholder="Password"
                    value={formValues.password}
                     onChange={errorSubmit}
                     />
                      <div className="text-danger ml-4">
                     <div>{wrong.password}</div>
                     </div>
                   
                     <p style={{color:"red"}}> </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/key.jpg`} alt="logo"/>
                     <input className="border-1 shadow"
                      type="password"
                     name="confirm_password"
                     placeholder='Confirm Password'
                     onChange={errorSubmit}

                     />  
                      <div className="text-danger ml-4">
                     <div>{wrong.confirm_password}</div>
                     </div>
                 <br/>
                 <p style={{color:"red"}}> </p>
                <label className="p-3">Organizer
                <input className="m-2"
                id="organizer"
                type="radio"
                name="role"
                value='organizer' 
                checked={formValues.role === 'organizer'}
                onChange={errorSubmit}
                />
                </label>
                <label className="p-3">Guest
                <input className="m-2"
                id="guest"
                type="radio"
                name="role"
                value='guest'
                checked={formValues.role === 'guest'}
                onChange={errorSubmit}
                />
                <div className="text-danger ml-4">
                     <div>{wrong.role && "a role must be selected"}</div>
                     </div>
                
                </label>
                <br/>




                <input type="submit"
                disabled={disabled}
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

export default Register;
