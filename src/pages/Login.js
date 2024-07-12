import React from 'react';
import loginImg from "../assets/login.jpg"
import Template from '../components/template';

const Login = ({setIsLoggedIn}) => {
  return (
    <div className='bg-richblack-900'>
      <Template
         title="Welcome Back"
         desc1="Shop for today, tomorrow, and beyond"
         desc2="A Website for all off your needs"
         image={loginImg}
         formType="Login"
         setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
