import { createSlice } from "@reduxjs/toolkit";

const PricingSlice = createSlice({
    name:'Pricing',
    initialState:{
        list:[],
    },
    reducers:{
        addPricing:(state,action) => {
            state.list.push(action.payload)
        },

        updatePricing:(state,action) => {
            const index = state.list.findIndex(pricing=> pricing.id === action.payload.id)
            if(index !== -1){
                state.list[index]= action.payload
            } 
        },
        
        deletePricing:(state,action) => {
            state.list = state.list.filter(pricing => pricing !== action.payload)
        }

    }
})
export const {addPricing,updatePricing,deletePricing} = PricingSlice.actions;
export default PricingSlice.reducer; 