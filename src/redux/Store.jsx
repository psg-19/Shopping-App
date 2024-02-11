import { configureStore } from "@reduxjs/toolkit";
import { CardSlice } from "./Slices/CartSlice";
// import CartReducer  from "./Reducers/CartReducer";

export const store=configureStore({
    reducer:{
        cart:CardSlice.reducer,
    }
})