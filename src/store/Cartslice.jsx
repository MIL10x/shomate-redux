import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      console.log(action.payload);
      const updatedList = state.cartList.concat(action.payload);
      const foundtotal = state.total + action.payload.Price;
      return { ...state, total: foundtotal, cartList: updatedList };
    },
    remove(state, action) {
      console.log(typeof action.payload.Id);
      const updateList = state.cartList.filter(
        (item) => item.Id !== action.payload.Id
      );
      console.log(updateList);
      const foundtotal = state.total - action.payload.Price;
      return { ...state, total: foundtotal, cartList: updateList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartreducer = cartSlice.reducer;
