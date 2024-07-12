import React from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = (props) => {
  const cart = useSelector((state) => state.cart);
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className='w-full bg-richblack-900 h-[70px] flex justify-between items-center px-4 border-b-[1px]'>
      <div className='flex justify-between items-center w-full max-w-[1160px] mx-auto'>
        <Link to="/">
          <img className='navImage' src={logo} alt="Logo" height="20px" width="150px" />
        </Link>

        {/* Login - Signup - Logout - Dashboard */}
        <div className='flex items-center gap-x-4 text-white'>
          {!isLoggedIn && (
            <Link to="/login">
              <button className='log-in bg-richblack-800 py-2 px-4 rounded-md border hover:text-green-400 transition-all duration-200 ease-in border-richblack-700'>
                Log In
              </button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup">
              <button className='sign-up bg-richblack-800 py-2 px-4 rounded-md border hover:text-green-400 transition-all duration-200 ease-in border-richblack-700'>
                Sign Up
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/">
              <button
                className='log-out bg-richblack-800 py-2 px-4 rounded-md border hover:text-green-400 transition-all duration-200 ease-in border-richblack-700'
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
              >
                Log Out
              </button>
            </Link>
          )}

          {isLoggedIn && (
            <Link to="/dashboard">
              <button className='dashboard bg-richblack-800 py-2 px-4 rounded-md border hover:text-green-400 transition-all duration-200 ease-in border-richblack-700'>
                Dashboard
              </button>
            </Link>
          )}

          <div className="flex items-center gap-x-3">
            {isLoggedIn && (
              <NavLink to="/dashboard">
                <p className="home hover:text-green-400 transition-all duration-200 ease-in">Home</p>
              </NavLink>
            )}

            {isLoggedIn && (
              <NavLink to="/cart">
                {cart.length === 0 ? (
                  <FaShoppingCart className="hover:text-green-400 transition-all duration-200 ease-in" />
                ) : (
                  <div className="flex items-center relative">
                    <p className="bg-green-500 absolute right-0 top-0 flex items-center justify-center h-[20px] w-[20px] rounded-full translate-x-1/2 -translate-y-1/2">
                      {cart.length}
                    </p>
                    <FaShoppingCart className="hover:text-green-400 transition-all duration-200 ease-in" />
                  </div>
                )}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
