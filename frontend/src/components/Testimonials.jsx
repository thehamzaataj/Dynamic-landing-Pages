import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/swiper-bundle.css"; 
import { Autoplay, Pagination } from "swiper/modules"; 
import { FaRegDotCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "1Micheal Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "2Micheal Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "3Micheal Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "4Micheal Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
  {
    name: "5Micheal Gough",
    title: "CEO at Google",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png",
    quote: "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  },
];  

const Testimonials = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);    

  const handleDotClick = (index) => {
    swiperRef.current.swiper.slideTo(index); 
    setActiveIndex(index); 
  };

  return (
    <div className="m-6 md:mx-20 md:pt-24 text-center space-y-9">
      <h5 className="text-lg font-semibold pb-2 border-b-4 border-blue-500 inline-block text-gray-800">Testimonial</h5>
      <h1 className="text-4xl md:text-5xl font-bold">What Our Clients Say!</h1>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          1024: {
            slidesPerView: 3, 
          },
        }}
        autoplay={{ delay: 3000 }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} 
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <section className="border border-[#55555] rounded-md shadow-lg p-8 max-w-md mx-auto">
              <div className="text-center" aria-live="polite">
                <blockquote>
                  <p className="text-lg font-medium text-gray-500">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt={`${testimonial.name}'s profile picture`}
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500">
                    <div className="pr-3 font-medium text-gray-900">{testimonial.name}</div>
                    <div className="pl-3 text-sm font-light text-gray-500">{testimonial.title}</div>
                  </div>
                </figcaption>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer mx-2 ${activeIndex === index ? "text-blue-500" : "text-gray-400"}`}
            onClick={() => handleDotClick(index)} 
            onKeyPress={(e) => e.key === 'Enter' && handleDotClick(index)} 
            role="button"
            tabIndex={0}
          >
            <FaRegDotCircle className="inline-block text-2xl" />
          </span>
        ))}
      </div>
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 20px;
          height: 20px;
          opacity: 1;
          margin: 0 5px; 
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
