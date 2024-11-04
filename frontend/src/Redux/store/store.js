import { configureStore } from "@reduxjs/toolkit";
import testimonialsReducer from '../testimonials/testimonials'
import pricingReducer from '../pricing/Pricing'
const store = configureStore({
    reducer:{
        testimonials : testimonialsReducer,
        pricing : pricingReducer
    },
})
export default store