import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const cart = useSelector((state) => state.cart); //redux waale code me humne define kia hua h initialState as an empty array. Hum aage code likhenge in CartSlice.jsx jisse hm ye pta lga paaenge ki jo v cart empty h ya nai
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      return cart.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price,
        0
      );
    };

    setTotalAmount(calculateTotal());
  }, [cart]); //jb v cart waali array k andar kuch v change hoga mtlb value add hogi, delete hogi tbhi krenge n render so that's why [cart] likha hai

  return (
    <div className="flex flex-col lg:flex-row justify-between max-w-6xl lg:mx-auto">
    <div className="flex flex-col mb-10 mt-10 w-full] lg:max-w-2xl">
      {cart.length > 0 ? (
        cart.map((item, index) => <CartItem key={index} item={item} />)
      ) : ( 
        <EmptyCart/>
      )}
    </div>

    <div className="flex flex-col justify-between w-full lg:w-1/3 lg:ml-10">
      {cart.length > 0 && (
        <>
          <div className="mt-16 lg:mt-20 px-5">
            <div className="text-[30px] text-green-700 uppercase font-semibold">
              Your Cart
            </div>
            <div className="text-[50px] text-green-800 uppercase font-semibold -mt-[20px]">
              Summary
            </div>
            <p className="text-[20px] mt-3 text-gray-900 font-semibold">
              Total Items: {cart.length}
            </p>
          </div>
          <div className="mb-16 px-5 flex flex-col ">
            <p className="text-[20px] mt-3 text-gray-900 font-semibold">
              Total Amount : ${totalAmount}
            </p>
            <button className="mt-3 text-[20px] bg-green-600 text-white px-4 py-3 rounded-md font-bold border border-green-600 hover:text-green-800 hover:bg-gray-100 hover:border-green-800 transition-all duration-200 ease-in">
              CheckOut Now
            </button>
          </div>
        </>
      )}
    </div>
  </div>
);
};

export default Cart;

