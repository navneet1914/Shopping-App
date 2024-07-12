import React, { useState } from 'react';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast";


const LoginForm = ({setIsLoggedIn}) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    function changeHandler(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name] : event.target.value
            }
        }
               

        )
    }

    function submitHandler(event){
         event.preventDefault();
         setIsLoggedIn(true);  //yha true set krne se Log out and dashboard wala button dikhne lg jaega
         toast.success("Logged In")
         navigate("/dashboard")
    }


  return (
    <div className='login '>
      <form className=' flex flex-col w-full gap-y-4 mt-6'
       onSubmit={submitHandler}>
        <label className='w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-pink-200'>*</sup>
            </p>
            <input
                className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[12px] px-2'
                required
                type='email'
                placeholder='Enter Your Email address'
                name='email'
                value={formData.email}
                onChange={changeHandler}
            />
        </label>
        <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password <sup className='text-pink-200'>*</sup>
            </p>
            <input
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[12px] px-2'
                required
                type={showPassword ? ('text') : ('password')}
                placeholder='Enter Your Password'
                name='password'
                value={formData.password}
                onChange={changeHandler}
            /> 
            <span className='absolute right-3 top-[42px] cursor-pointer text-white' 
            onClick={() => setShowPassword((prev)=> !prev )}> {/*//agr showPassword true hai to usko false kr do and agr false h to true kr do */}
                {showPassword ? (<FiEyeOff/>) : (<FiEye/>)}
            </span>

            <Link to="#">
                <p className='text-xs max-w-max mt-1 text-blue-100 ml-auto'>
                    Forgot Password?
                </p>
            </Link>
        </label>

        <button
         className='flex justify-center items-center font-medium bg-yellow-50 rounded-[8px] text-richblack-900 py-2 mt-6'>
        Sign In
        </button>
      </form>
    </div>
  )
}

export default LoginForm
