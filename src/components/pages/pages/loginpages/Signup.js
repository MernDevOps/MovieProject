import React from 'react'
import {Link} from "react-router-dom";


function Signup() {
    return (
        <section className="login">
        <div className="loginContainer">
         <label>Username</label>
            <input
            type="text"
            placeholder="Enter Full Name"
            required
            autoFocus
            />

            <label>First Name</label>
            <input
            type="text"
            placeholder="First Name"
            required
            />

            <label>Last Name</label>
            <input
            type="text"
            placeholder="Last Name"
            required
            /> 

            <label>E-mail</label>
            <input
            type="text"
            placeholder="E-mail"
            required
            />

            <label>Password</label>
            <input 
            type="password"
            placeholder="Password"
            required
            />

            <div className="btnContainer">
                <> 
                    
                <button>Sign up</button>   
                   <p> Have an account ?
                    <Link to="/Signin" style={{color:'red',padding:'5px'}}>Sign in</Link>
                    </p>
                    </>
            </div>
        </div>
       </section>
    )
}

export default Signup;