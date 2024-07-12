import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({isLoggedIn}, {setIsLoggedIn}) => {
  

    
  const navigate = useNavigate()
  function clickHandler (){
      navigate('/');   
  }
  
  return (
    <div className='flex justify-center items-center h-[100vh] text-white text-3xl'>
      <button className='bg-richblack-900 px-3 py-4 rounded-lg text-[25px] shadow-xl' onClick={clickHandler}>Shop Now</button>
    </div>
  )
}

export default Dashboard
