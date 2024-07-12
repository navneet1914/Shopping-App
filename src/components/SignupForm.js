import React, { useState } from "react";
import toast from "react-hot-toast";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";


const SignupForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [accountType, setAccountType] = useState("")

  const navigate= useNavigate()

  function changeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submitHandler(event){
       event.preventDefault();
       if(formData.password !== formData.confirmpassword){
        toast.error("Passwords do not match")
       }
       else{
        setIsLoggedIn(true);  //ye true kia taaki sign up and dashboard button visible ho jaae
        toast.success("Account Created Successfully");
        navigate('/dashboard');
        const finalData = {
          ...formData,
          accountType
         }
  console.log("Printing Final Data");
         console.log(finalData);  
       }
  }

  return (
    <div className="signup ">
      

      <form onSubmit={submitHandler}>
        <div className="flex justify-between gap-x-4 mt-3">
          <label className>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              First Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[8px] px-2'
              required
              type="text"
              name="firstname"
              placeholder="Enter First Name"
              onChange={changeHandler}
              value={formData.firstname}
            />
          </label>

          <label>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
              Last Name<sup className='text-pink-200'>*</sup>
            </p>
            <input
              className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[8px] px-2'
              required
              type="text"
              name="lastname"
              placeholder="Enter Last Name"
              onChange={changeHandler}
              value={formData.lastname}
            />
          </label>
        </div>


        <label>
          <p className='mt-3 text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Email<sup className='text-pink-200'>*</sup>
          </p>
          <input
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[8px] px-2'
            required
            type="email"
            name="email"
            placeholder="Enter Your E-mail Address"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>
       <div className="flex justify-between gap-x-4 mt-3">
        <label className='relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
             Create Password<sup className='text-pink-200'>*</sup>
          </p>
          <input
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[8px] px-2'
            required
            type={showPassword1 ? ('text') : ('password')}
            name="password"
            placeholder="Password"
            onChange={changeHandler}
            value={formData.password}
          />
            <span className='absolute right-2 top-[38px] cursor-pointer text-white'
            onClick={() => setShowPassword1((prev) => !prev)}> {/*//agr showPassword true hai to usko false kr do and agr false h to true kr do */}
            {
                showPassword1 ? (<FiEyeOff />) : (<FiEye />)
            }
          </span>
        </label>

        <label className='relative'>
          <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            Confirm Password<sup className='text-pink-200'>*</sup>
          </p>
          <input
            className='bg-richblack-800 rounded-lg text-richblack-5 w-full py-[8px] px-2'
            required
            type={showPassword2 ? ('text') : ('password')}
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={changeHandler}
            value={formData.confirmpassword}
          />
          <span className='absolute right-2 top-[38px] cursor-pointer text-white'
          onClick={() => setShowPassword2((prev) => !prev)}>
            {
                showPassword2 ? (<FiEyeOff />) : (<FiEye />)
            }
          </span>
        </label>
        </div>
        <button className='flex justify-center w-full items-center font-medium bg-yellow-50 rounded-[8px] text-richblack-900 py-2 mt-6'>
            Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
