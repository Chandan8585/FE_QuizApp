import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./signUp.css"
import axios from 'axios';

import { Link } from 'react-router-dom';


const initialValues = {
    userName: '',
    emailID: '',
    mobile: '',
    password: '',
    confirmPassword:'',
}

const validationSchema = Yup.object({
    userName: Yup.string().required("User name is required"),
    emailID: Yup.string().email('Invalid email address').required('Email is required'),
    mobile: Yup.string().matches(/^[0-9]{10}$/, 'Invalid number').required('Phone Number is Required'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).+$/, 'Password must include atleast 1 upperCase 1 lowerCase and any spcial Character ex: Abcd@1234').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Password Not Matching").required('Confirm Password is required')
})




const Signup = () => {
    const [serverError, setServerError] = useState("");
//    const { name, email, password, confirmPassword, mobile, authDispatch} = useAuth();

 const handleSubmit = async(values)=> {
    // event.preventDefault()
    let {userName, emailID, mobile, password} = values;
    // console.log(JSON.stringify(userName));
      console.log({userName, emailID, mobile, password})
    try {
        const response = await axios.post("https://wicked-plum-sea-urchin.cyclic.cloud/auth/register", {
            userName: values.userName, number: values.mobile, email : values.emailID, password: values.password
        });
        console.log("signed up");
        console.log(response);
      } catch (error) {
        console.log(error);
        setServerError("User Already exists with these details");
      }

      
   
        
 }
  return (
    <div className="container">
    {/* <div className="login-auth d-flex direction-column justify-center"> */}
        <h2 className="auth-title">Sign Up</h2>
<Formik 
    initialValues = {initialValues}
   validationSchema = {validationSchema}
   onSubmit = {handleSubmit}
   className='signUp-container'
   >
    <Form >
        <div className='form-container'>
            <label htmlFor='userName' className="form-label">Your Name</label>
            <Field type="text" className="form-input-log" name='userName' placeholder= "Enter your First Name"/> 
            <ErrorMessage name='userName' component='div' className='error-message'/>
        </div>
        <div className='form-container'>
            <label htmlFor='mobile' className="form-label">Phone Number</label>
            <Field type="tel" className="form-input-log lh-ls" name='mobile' placeholder= "Enter your Phone Number" /> 
            <ErrorMessage name='mobile' component='div' className='error-message'/>

        </div>
        <div className='form-container'>
            <label htmlFor='emailID' className="form-label">Email ID</label>
            <Field type="email" className="form-input-log lh-ls" name='emailID' placeholder= "Enter your Email ID"/> 
            <ErrorMessage name='emailID' component='div' className='error-message'/>

        </div>
        <div className='form-container'>
            <label htmlFor='password' className="form-label">Password</label>
            <Field type="password" className="form-input-log lh-ls" name='password' placeholder= "Enter your password"/> 
            <ErrorMessage name='password' component='div' className='error-message'/>

        </div>
        <div className='form-container'>
            <label htmlFor='confirmPassword' className="form-label">Confirm Password</label>
            <Field type="password" className="form-input-log lh-ls" name='confirmPassword' placeholder= "Enter Confirm Password"/> 
            <ErrorMessage name='confirmPassword' component='div' className='error-message'/>

        </div>
        <div className='submit-btn'>
      <button type="submit" className='btn-margin cursor signup-btn'>Sign Up</button>
       {serverError && <div className='server-error'>{serverError}</div>}
    </div>
    <div className='login-here'> 
          <p>Already have an account <Link to="/auth/login"><span className='span'>Login</span></Link> here</p>
    </div>
    </Form>
</Formik>

{/* </div> */}
  </div>
  )
 }

export default Signup































