import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
        add:(state, action) => {
            state.push(action.payload) //action.payload shows the input parameter passed inside the reducer function. Here reducer function is add(post) which is passed inside Product.jsx
        },
        remove:(state, action) => {
            return state.filter((item) => item.id !== action.payload) //state k andar sirf wahi waale items ko retain krna jinki id action k andar input me jo id aayi h uske equal naa ho
        }
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;