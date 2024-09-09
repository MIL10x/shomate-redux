import { configureStore } from "@reduxjs/toolkit";
import { cartreducer } from "./Cartslice";

const store = configureStore({
  reducer: {
    cartState: cartreducer,
  },
});

export default store;
