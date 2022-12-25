import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./slices/Card-slice";
import ProductsReducer from "./slices/Products-slice";


export const store = configureStore({
    reducer: {
        products: ProductsReducer,
        card: cardReducer
    }
});