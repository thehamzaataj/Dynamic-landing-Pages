import React from "react";

const Testimonials = () => {
  return (
    <div className="m-6 md:m-20 text-center space-y-9">
        <h5 className="text-lg font-semibold pb-2 border-b-4 border-blue-500 inline-block text-gray-800">Testimonial</h5>
        <h1 className="text-4xl md:text-5xl font-bold">What Our Clients Say!</h1>
      <div className=" flex flex-col md:flex-row gap-7">
        <section className=" border border-[#55555] rounded-md shadow-lg p-8 max-w-md ">
          <div className="text-center" aria-live="polite">
            <blockquote>
              <p className="text-lg font-medium text-gray-500 ">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="Micheal Gough's profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500">
                <div className="pr-3 font-medium text-gray-900">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </div>
        </section>
        <section className="border border-[#55555]  rounded-lg shadow-lg p-8 max-w-md">
          <div className="text-center" aria-live="polite">
            <blockquote>
              <p className="text-lg font-medium text-gray-500">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="Micheal Gough's profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500">
                <div className="pr-3 font-medium text-gray-900">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </div>
        </section>
        <section className="border border-[#55555]    rounded-lg shadow-lg p-8 max-w-md ">
          <div className="text-center" aria-live="polite">
            <blockquote>
              <p className="text-lg font-medium text-gray-500">
                "Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
                alt="Micheal Gough's profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500">
                <div className="pr-3 font-medium text-gray-900">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500">
                  CEO at Google
                </div>
              </div>
            </figcaption>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default Testimonials;
