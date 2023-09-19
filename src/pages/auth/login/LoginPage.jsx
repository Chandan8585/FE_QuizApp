import React, { Fragment } from 'react'
import Navbar from '../../../components/Navbar'
import Login from '../../../components/auth/Login'

const LoginPage = () => {
  return (
    <Fragment>
        <Navbar/>
        <Login/>
    </Fragment>
  )
}

export default LoginPage