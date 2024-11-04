import React from 'react';
import { Button } from "@material-tailwind/react";  

const ViewPricing = ({ plans, deletePlan, onEdit }) => {
  return (
    <section className="">
      <div className="py-5">
        <h5 className="text-sm font-semibold pb-2 border-b-4 border-[#696cff] inline-block text-gray-800">
          View Pricing
        </h5>
      </div>
      <div className="pt-8 px-4 mx-auto max-w-screen-xl lg:pt-28 lg:px-6">
        {/* Pricing Cards */}
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {plans.map((plan) => (
            <div key={plan.id} className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow xl:p-8">
              <h3 className="mb-4 text-2xl font-semibold">{plan.title}</h3>
              <p className="font-light text-gray-500 sm:text-lg">{plan.description}</p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">${plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              {/* List */}
              <ul role="list" className="mb-8 space-y-4 text-left">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center space-x-4">
                <button onClick={() => onEdit(plan)} className="text-blue-600 hover:text-blue-700">
                  Edit
                </button>
                <button onClick={() => deletePlan(plan.id)} className="text-red-600 hover:text-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ViewPricing;
