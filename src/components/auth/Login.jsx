import React from 'react'
import "./Auth.css"
import { useNavigate } from 'react-router-dom';
import { LoginHandler } from '../services/authService';
import { useAuth } from '../context/authContext';

const Login = () => {
    const navigate = useNavigate();
    const { userName, password, authDispatch } = useAuth();
    console.log("username",userName, password, authDispatch );
 const handleLoginClick= (event)=> {
          event.preventDefault();
          const token = LoginHandler(userName, password);
          console.log("token", token);
          if(token){
            navigate("/")
          }
          authDispatch({
            type: "TOKEN",
            payload: token
          })
          authDispatch({
            type: "CLEAR_CREDENTIALS"
          })
 }
 const handleUserNameChange = (event)=> {
         authDispatch({
            type: "USERNAME",
            payload: event.target.value
         })
 }
 const handlePasswordChange = (event)=> {
         authDispatch({
            type: "PASSWORD",
            payload: event.target.value
         })
 }
 const handleTestCredentialsClick = ()=> {
      const token = LoginHandler("Chandan", "Password");
      authDispatch({
        type: "TOKEN",
        payload: token
      })
      if(token){
        navigate("/");
      }
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
                className="form-input-log lh-ls" placeholder="Chandan_Pratap8585" 
                onChange={handleUserNameChange}
                />
            </div>
            <div className="form-container">
                <label className="form-label">Password</label>
                <input 
                value={password} 
                className="form-input-log lh-ls" placeholder="*******" 
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