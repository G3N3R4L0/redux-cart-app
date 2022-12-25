import { createSlice } from "@reduxjs/toolkit";


const CardSlice = createSlice({
    initialState: [],
    name: 'CardSlice',
    reducers: {
        addCard: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id);
            if (findProduct) {
                findProduct.quantity += 1
            } else {
                const productClone = {...action.payload, quantity: 1};
                state.push(productClone);
            }
        },
        deleteCard: (state, action) => {
            return state.filter((product) => product.id != action.payload.id);
        },
        clear: (state, action) => {
            return [];
        }
    }
});

const cardReducer = CardSlice.reducer;

export const {addCard, deleteCard, clear} = CardSlice.actions;

export default cardReducer;


