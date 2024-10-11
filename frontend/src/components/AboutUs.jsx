import React, { useState, useEffect } from "react";
import { FaTimes, FaUsers, FaPhone } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { motion } from 'framer-motion';
import "./AboutUs.css";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = [
    {
      name: "Story",
      content:
        "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
    },
    {
      name: "Mission",
      content:
        "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
    },
    {
      name: "Vision",
      content:
        "Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit diam ipsum et tempor. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row  px-6 pt-6 md:p-16 space-y-6 md: md:space-x-8">
        <motion.div
          className="flex justify-center"
          initial={{ y: 100, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2.5 }} 
          viewport={{ once: false }}  
        >
          <img
            src="https://themewagon.github.io/finanza/img/about.jpg"
            alt="About Us"
            className="w-[760px] sm:w-full  object-cover rounded-md"
          />
        </motion.div>

        <motion.div
          className="flex flex-col space-y-6 justify-end flex-1 text-gray-900"
          initial={{ opacity: 0, translateY: 50 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }} 
        >
          <div>
            <h5 className="text-lg font-semibold pb-2 border-b-4 border-blue-500 inline-block text-gray-800">
              About Us
            </h5>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            <Typewriter
              words={["We Help Our Clients To Grow Their Business"]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed
            stet Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
            Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
            sit, sed stet lorem sit clita duo justo magna dolore erat amet.
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos labore.
          </p>

          <div className="max-w-full border border-[#dfe4fd] rounded-md">
            <div className="flex border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`px-4 py-2 font-semibold focus:outline-none transition-colors duration-200 ${
                    activeTab === tab.name
                      ? "border-b-2 border-blue-500 text-blue-500"
                      : "text-gray-600 hover:text-blue-500"
                  }`}
                  aria-selected={activeTab === tab.name}
                  role="tab"
                >
                  {tab.name}
                </button>
              ))}
            </div>

            <motion.div
              className={`p-4 rounded-md bg-white text-gray-900`}
              role="tabpanel"
              initial={{ opacity: 0, translateY: 20 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }} 
            >
              {tabs.find((tab) => tab.name === activeTab)?.content}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
