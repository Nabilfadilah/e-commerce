import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            )
            if(!existingItem) {
                state.cartItems.push({...action.payload, quantity: 1})
            }
        },

        removeFormCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload.id
            )
        },

        increaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1
            }
        },

        descreaseQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            )
            if(itemIndex >= 0 && state.cartItems[itemIndex].quantity > 1) {
                state.cartItems[itemIndex].quantity -= 1
            } else if (state.cartItems[itemIndex].quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                )
            }
        }
    }
})

export const {addToCart, removeFormCart, increaseQuantity, descreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer