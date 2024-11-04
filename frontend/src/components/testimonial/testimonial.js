import{ createContext, useState, useContext } from 'react';

const TestimonialContext = createContext();

export const useTestimonials = () => {
  return useContext(TestimonialContext);
};

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (testimonial) => {
    setTestimonials((prev) => [...prev, testimonial]);
  };

  const editTestimonial = (id, updatedTestimonial) => {
    setTestimonials((prev) =>
      prev.map((testimonial) => (testimonial.id === id ? updatedTestimonial : testimonial))
    );
  };

  const deleteTestimonial = (id) => {
    setTestimonials((prev) => prev.filter((testimonial) => testimonial.id !== id));
  };

  return (
    <TestimonialContext.Provider value={{ testimonials, addTestimonial, editTestimonial, deleteTestimonial }}>
      {children}
    </TestimonialContext.Provider>
  );
};
