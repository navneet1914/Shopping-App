import React from 'react'
import signupImg from "../assets/signup.jpg"
import Template from '../components/template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <div className='bg-richblack-900'>
      <Template
        title="Join the millions hunting their dream Products"
        desc1="Shop for today, tomorrow, and beyond"
        desc2="A Website for all off your needs"
        image={signupImg}
        formType="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
