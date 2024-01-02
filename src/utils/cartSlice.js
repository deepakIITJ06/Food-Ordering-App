import { CreateSliceOptions, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem : (state, action)=>{
            // Mutating the state here
            state.items.push(action.payload);
        },
        removeItem : (state)=>{
            state.items.pop();
        },
        clearCart : (state)=>{
            // don't do like => state = []
            state.items.length = 0;
            // or u can do like that => return {items: []}
        },
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;
// basically cartSlice is sending an object in which we have all the three actions
export default cartSlice.reducer;

// reducer is different than reducers in simple words reducer is whole redux store in which we have reducers as small small cart Slice