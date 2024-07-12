import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed from Cart");
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row justify-between gap-10 border-b-2 border-gray-900">
        <div className="flex justify-center lg:justify-start p-4">
          <img className="h-[160px] w-auto object-cover" src={item.image} alt={item.title} />
        </div>
        <div className="flex flex-col mt-5 mb-10 w-full lg:w-auto">
          <h1 className="text-gray-900 text-[20px] font-bold max-w-full lg:max-w-[400px]">
            {item.title}
          </h1>
          <h1 className="mt-5 truncate max-w-full lg:max-w-[400px]">{item.description}</h1>
          <div className="flex w-full justify-between mt-10 items-center">
            <div>
              <p className="text-green-600 font-bold text-[18px]">${item.price}</p>
            </div>
            <div className="cursor-pointer hover:bg-red-300 flex justify-center items-center h-[30px] w-[30px] bg-red-200 rounded-full">
              <MdDelete className="cursor-pointer text-red-700" onClick={removeFromCart} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default CartItem;

