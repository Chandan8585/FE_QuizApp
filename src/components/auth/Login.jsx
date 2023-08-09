import React, { useState } from 'react'
import "./Auth.css"


const Login = () => {
    const [userName , setUserName] = useState("");
    const [password , setPassword] = useState("");
 const handleLoginClick= ()=> {
     if(userName ==="" || password===""){
        return "fill the required input" ;
     }
 }
 const handleUserNameChange = (event)=> {
         setUserName(event.target.value);
 }
 const handlePasswordChange = (event)=> {
    setPassword(event.target.value);
 }
 const handleTestCredentialsClick = ()=> {

 }
  return (
    <div className="d-grid">
    <div className="login-auth d-flex direction-column justify-center">
        <h2 className="auth-title">Login</h2>
        <form 
        onSubmit={handleLoginClick}
        >
            <div className="form-container">
                <label className="form-label">Username</label>
                <input 
                value={userName} 
                className="form-input lh-ls" placeholder="prakashsakari" 
                onChange={handleUserNameChange}
                />
            </div>
            <div className="form-container">
                <label className="form-label">Password</label>
                <input 
                value={password} 
                className="form-input lh-ls" placeholder="*******" 
                onChange={handlePasswordChange}
                />
            </div>
            <div className="cta">
                <button className="button login-btn btn-margin cursor sign-up-btn">Login</button>
            </div>
        </form>
        <div>
            <button className="button login-btn btn-outline-primary btn-margin sign-up-btn" 
            onClick={handleTestCredentialsClick}
            >
                Login with Test Credentials
            </button>
        </div>
    </div>
</div>
  )
}

export default Login