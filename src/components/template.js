// This file shows the similar parts of Login component and SignUp compnonent
import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="flex justify-between w-11/12 max-w-[1160px] h-[100vh] py-12 mx-auto gap-x-12">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-richblack-5 fonmt-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
        <p className="flex flex-col text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100"> {desc1} </span>
          <span className="text-blue-100 italic"> {desc2} </span>
        </p>

        {formType === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

        <div className="flex w-full items-center my-4  gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>

        <button className="w-full flex justify-center items-center gap-x-2 mt-6 text-richblack-100 rounded-md font-medium border border-richblack-700 px-[12px] py-[8px]">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      <div className="relative">
      {/* The frame image is common in both the cases so we have written the code to attach the image here only */}
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
          className="img"
        />

        <img
          src={image}
          alt="Students"
          width={558}
          height={504}
          loading="lazy"
          className="img absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
