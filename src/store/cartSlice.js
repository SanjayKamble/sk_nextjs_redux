// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: 'cart',
    initialState:[],
    reducers: {
        add(state, action) {
            //state management convention says an state cannot be changed directly(in our case this array).
            //createSlice() internally creates a new array, it does not allow push() to make changes to state directly
            state.push(action.payload);//action.payload is the argument passed by the calling function


        },
        remove(state,action) {
            //return an array with elements that does not matches the specific id
            return state.filter((item) => item.id !== action.payload);
        },

        calculateTotal:(state)=>{
            let  total = 0;

            state.forEach((item)=>{
             total += item.price;
            })
             
              state.totalAmount = total;
            //   console.log(state.total);
          },
    }
});

// console.log/(cartSlice);

export const { add, remove,calculateTotal } = cartSlice.actions;//actions

export default cartSlice.reducer;