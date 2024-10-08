import React, { useEffect, useState } from "react";
import { ImCheckmark } from "react-icons/im";
import { FaArrowRight } from "react-icons/fa";

const Features = () => {
  const [headingAnimation, setHeadingAnimation] = useState("");
  const [cardAnimation, setCardAnimation] = useState("");

  useEffect(() => {
    // Animate heading from the left
    setHeadingAnimation("animate-slideInLeft");
    
    // Animate cards from the right
    setCardAnimation("animate-slideInRight");
  }, []);

  return (
    <div className="mx-5 md:m-20 flex flex-col md:flex-row">
      <div className={`space-y-7 pr-10 my-20 ${headingAnimation}`}>
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
        <button className="bg-blue-600 text-white py-4 px-7 rounded-md hover:bg-blue-700">Explore More</button>
      </div>
      <div className={`flex flex-col space-y-6 ${cardAnimation}`}>
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
              href=""
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
              href=""
              className="group-hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              ReadMore
            </a>
            <FaArrowRight className="group-hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
      <div className={`flex items-center sm:mx-5 mt-7 ${cardAnimation}`}>
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
              href=""
              className="group-hover:text-white hover:underline transition duration-300 ease-in-out"
            >
              ReadMore
            </a>
            <FaArrowRight className="group-hover:text-white transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Features;
