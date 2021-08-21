import {createSlice} from '@reduxjs/toolkit';

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        orderedProducts:[],
    },
    reducers: {
        setState: (state,action) =>{
            return {
                ...state,
                orderedProducts: [...state.orderedProducts, action.payload],
            }
        }
    }
})

export const { setState } = orderSlice.actions;

export default orderSlice.reducer;