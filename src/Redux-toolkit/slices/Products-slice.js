import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("ProductsSlice/fetchProducts", async () => {
    const res = await fetch("http://localhost:9000/products");
    const data = await res.json();
    console.log(data);
    return data
})


const ProductsSlice = createSlice({
    initialState: [],
    name: 'ProductsSlice',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

const ProductsReducer = ProductsSlice.reducer;

export const {} = ProductsSlice.actions;

export default ProductsReducer;

