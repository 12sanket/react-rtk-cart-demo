import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import cartItems from '../../cartItems'

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    cartItems,
    amount: 5,
    total: 0,
    isLoading: true
}

export const getCartItems = createAsyncThunk('cart/getCartItems', ()=> {
    return fetch(url).then( response => response.json()).catch(error => console.log(error))
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart : (state) => {
            state.cartItems = []
        },
        removeItem: (state, {payload}) => {
            console.log('remove');
            state.cartItems = state.cartItems.filter((item) => item.id !== payload.id )
        },
        increase : (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount += 1 
        },
        decrease : (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id)
            cartItem.amount -= 1 
        },
        calculateTotal : (state) => {
            let amount = 0
            let total = 0
            state.cartItems.forEach(item => {
                amount += item.amount
                total += item.amount * item.price
            });
            state.amount = amount
            state.total = total
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state, action)=> {
            state.isLoading = true
        },
        [getCartItems.fulfilled]: (state, action)=> {
            state.isLoading = false
            state.cartItems = action.payload
        },
        [getCartItems.rejected]: (state, action)=> {
            state.isLoading = false

        },
    }
})

//console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, calculateTotal} = cartSlice.actions
export default cartSlice.reducer;