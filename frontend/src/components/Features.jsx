import React from "react";
import { ImCheckmark } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Features = () => {
  // Animation variants for the heading (coming from right to left)
  const headingVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  // Animation variants for the cards (coming from left to right)
  const cardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } }
  };

  return (
    <div className="mx-5 md:mx-20 pt-28 flex flex-col md:flex-row">
      {/* Heading Section */}
      <motion.div
        className="space-y-7 pr-10 my-20"
        initial="hidden"
        animate="visible"
        variants={headingVariants} // Apply animation variant for heading
      >
        <h5 className="text-lg font-semibold pb-2 border-b-4 border-blue-500 inline-block text-gray-800">
          Why Choosing Us!
        </h5>
        <h1 className="text-4xl md:text-5xl font-bold">
          Few Reasons Why People Choosing Us!
        </h1>
        <p className="text-gray-500">
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet fdsfdsfdv dfdsfdfd d c dv cd cd cd
        </p>
        <button className="bg-blue-600 text-white py-4 px-7 rounded-md hover:bg-blue-700">
          Explore More
        </button>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="flex flex-col space-y-6"
        initial="hidden"
        animate="visible"
        variants={cardVariants} // Apply animation variant for cards
      >
        <div className="border border-[#55555] shadow-md rounded-md p-5 space-y-3 hover:bg-blue-500 transition duration-300 group">
          <ImCheckmark className="text-5xl text-blue-500 group-hover:text-white transition duration-300 ease-in-out" />
          <h5 className="font-bold text-2xl group-hover:text-white transition duration-300 ease-in-out">
            Fast Executions
          </h5>
          <p className="group-hover:text-white transition duration-300 ease-in-out text-gray-500">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
            erat amet
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="group-hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              ReadMore
            </a>
            <FaArrowRight className="group-hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>

        <div className="border border-[#55555] shadow-md rounded-md p-5 space-y-3 hover:bg-blue-500 transition duration-300 group">
          <ImCheckmark className="text-5xl text-blue-500 group-hover:text-white transition duration-300 ease-in-out" />
          <h5 className="font-bold text-2xl group-hover:text-white transition duration-300 ease-in-out">
            Fast Executions
          </h5>
          <p className="group-hover:text-white transition duration-300 ease-in-out text-gray-500">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
            erat amet
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="group-hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              ReadMore
            </a>
            <FaArrowRight className="group-hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>
      </motion.div>

      {/* Extra Card */}
      <motion.div
        className="flex items-center sm:mx-5 mt-7"
        initial="hidden"
        animate="visible"
        variants={cardVariants} // Apply animation variant for extra card
      >
        <div className="border border-[#55555] shadow-md rounded-md p-5 space-y-3 hover:bg-blue-500 transition duration-300 group">
          <ImCheckmark className="text-5xl text-blue-500 group-hover:text-white transition duration-300 ease-in-out" />
          <h5 className="font-bold text-2xl group-hover:text-white transition duration-300 ease-in-out">
            Fast Executions
          </h5>
          <p className="group-hover:text-white transition duration-300 ease-in-out text-gray-500">
            Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo
            erat amet
          </p>
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="group-hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              ReadMore
            </a>
            <FaArrowRight className="group-hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Features;
