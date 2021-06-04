import React from 'react'
import '../../../../css/Signin.css';
import {Link} from "react-router-dom";

 function Signin() {
    return (
        <section className="login">
        <div className="loginContainer">
        <h1>Login</h1>
            <label>E-mail</label>
            <input
            type="text"
            placeholder="E-mail"
            autoFocus
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
                    <button >Login</button>
                    {/* <label className="custom-control-label"for="customCheck">Remember Me</label> */}
                    
                       <p>Dont have an account?
                        <Link to="/Signup" style={{color:'red',padding:'5px'}}>Sign up</Link>
                        <br/>
                        {/* <span to="#" style={{color:'white',padding:'00px'}}>Forgot your password?</span> */}
                        Forgot your password?
                        </p> 
                    </>
            </div>
        </div>
       </section>
    )
}

export default Signin;