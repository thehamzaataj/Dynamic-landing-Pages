import { createSlice } from '@reduxjs/toolkit';

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState: {
    list: [],
  },
  reducers: {
    addTestimonial: (state, action) => {
      state.list.push(action.payload);
    },
    updateTestimonial: (state, action) => {
      const index = state.list.findIndex(testimonial => testimonial.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteTestimonial: (state, action) => {
      state.list = state.list.filter(testimonial => testimonial.id !== action.payload);
    },
  },
});

export const { addTestimonial, updateTestimonial, deleteTestimonial } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
