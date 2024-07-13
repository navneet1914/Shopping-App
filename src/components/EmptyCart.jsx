import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="font-bold text-[20px] ">Cart-Empty</h1>
        <Link to="/">
          <button className="text=[18px] font-bold uppercase bg-green-600 text-white border py-4 px-10 rounded-lg ">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
