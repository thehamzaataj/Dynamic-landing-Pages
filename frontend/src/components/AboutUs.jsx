import React, { useState } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('Story');

  const tabs = [
    { name: 'Story', content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.' },
    { name: 'Mission', content: 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.' },
    { name: 'Vision', content: 'Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit diam ipsum et tempor. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.' },
  ];

  return (
    <div className="flex flex-col md:flex-row p-8 md:p-20 space-y-8 md:space-y-0 md:space-x-8 ">
            <div className="flex-shrink-0 rounded-sm w-[600px]l md:w-1/2">
        <img src="https://themewagon.github.io/finanza/img/about.jpg" alt="About Us" className=" h-full object-cover rounded-lg " />
      </div>
      <div className="flex flex-col space-y-6 justify-end flex-1 text-gray-900">
        <div>
          <h5 className="text-lg font-semibold pb-2 border-b-4 border-blue-500 inline-block text-gray-800">
            About Us
          </h5>
        </div>
        
        <h1 className="text-5xl font-bold">We Help Our Clients To Grow Their Business</h1>
        
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet
          lorem sit clita duo justo magna dolore erat amet. Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos labore.
        </p>
        
        <div className="max-w-full border border-[#dfe4fd] rounded-md">
          <div className="flex border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`px-4 py-2 font-semibold focus:outline-none transition-colors duration-200 ${
                  activeTab === tab.name
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-600 hover:text-blue-500'
                }`}
                aria-selected={activeTab === tab.name}
                role="tab"
              >
                {tab.name}
              </button>
            ))}
          </div>
          
          <div className="p-4 rounded-md   bg-white text-gray-900" role="tabpanel">
            {tabs.find((tab) => tab.name === activeTab)?.content}
          </div>
        </div>
      </div>


    </div>
  );
};

export default AboutUs;
