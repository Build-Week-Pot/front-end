import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'







const Register = () => {


    const [regis, setRegis] = useState({
        fullName: "",
        email: "",
        username: "",
        password: "",
        role: "guest"

    })


const handle = (event) => {
    const newData = { ...regis }
    newData[event.target.id] = event.target.value
    setRegis(newData)
  
    
}



    const submitForm = () => {
        axios.post("https://potluckplanner7.herokuapp.com/api/user/register", {
            fullName: regis.fullName,
            email: regis.email,
            username: regis.username,
            password: regis.password,
            role: regis.role
        }).then(res => {
            console.log(res.data)
        })
      
     
   // All data information typed in boxes are pushed to 'data'
    }

    




return (
        <div className="mt-5" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="shadow p-5 mb-20 rounded  w-50 mt-1" style={{backgroundColor: '#8ecae6', border:'1px solid black'}}> 
            <h1 className="text-left pb-5" style={{fontWeight: '500'}}>Sign Up</h1>
            <form className="text-left" onSubmit={submitForm}>

            <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/person.png`} alt="logo"/>
                <input className="border-1 shadow"

                 id="fullName"
                 type="text"
                 name="fullName"
                 placeholder="Full Name"
                 value={regis.fullName}
                 onChange={(event) =>handle(event)}
                //  {...register('name')}
                />
                
                 <p style={{color:"red"}}></p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/email.jpg`} alt="logo"/>
                    <input className="border-1 shadow"
    
                    id="email"
                    type="email"
                     name="email"
                     placeholder="Email"
                     value={regis.email}
                     onChange={(event) =>handle(event)}
                    //  {...register('email')}
                     />
               
                 <p style={{color:"red"}}> </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/username.png`} alt="logo"/>
                     <input className="border-1 shadow"
    
                     id="username"
                     type="text"
                     name="username"
                     placeholder="Username"
                     value={regis.username}
                     onChange={(event) =>handle(event)}
                    //  {...register('username')}

                     />
               
                 <p style={{color:"red"}}></p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/lock.png`} alt="logo"/>
                     <input className="border-1 shadow"
    
                     id="password"
                     type="password"
                     name="password"
                     placeholder="Password"
                     value={regis.password}
                     onChange={(event) =>handle(event)}
                    
                    //  {...register('password')}
                     />
                   
                     <p style={{color:"red"}}> </p>
                 <br/>

                 <img style={{color: 'black', width: '3.4%', marginRight: '5px', paddingRight:'2px', paddingBottom:'4px'}} src={`${process.env.PUBLIC_URL}/assets/key.jpg`} alt="logo"/>
                     <input className="border-1 shadow"
                      type="password"
                     name="confirm_password"
                     placeholder='Confirm Password'
                     
                    //  {...register('confirm_password')}
                     />
                 
                 <br/>
                 <p style={{color:"red"}}> </p>
                
                <label className="p-3">Organizer
                <input className="m-2"
                id="organizer"
                type="radio"
                name="role"
                value={regis.role === 'organizer' }
                // onChange={(event) =>handle(event)}
                />
                </label>
                <label className="p-3">Guest
                <input className="m-2"
                id="guest"
                type="radio"
                name="role"
                value={regis.role === 'guest'}
                // onChange={(event) =>handle(event)}
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
