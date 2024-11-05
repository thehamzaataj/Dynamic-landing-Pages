import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "@material-tailwind/react";
const FeatureInputForm = ({isDarkMode}) => {
  return (
    <div>
        <form>
            <div className='flex gap-8 '>
         <div className="space-y-4 ">
            <div className="w-[576px]">
              <label className="block mb-2 text-sm text-slate-800">
            Main Heading
              </label>
              <input
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
            </div>
            <div className="w-[576px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph
              </label>
              <textarea
              rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
          
            </div>
          </div>
          <div className="space-y-4">
            <div className="w-[576px]">
              <label className="block mb-2 text-sm text-slate-600">
                Button Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-[#c4c7ca] rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter the Button Name"
              />
            </div>
            <div className="w-[576px]">
                <label className="block mb-2 text-sm text-slate-800">Instagram</label>
                <div className="relative">
                  <input
                    type="url"
                    className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-[#c4c7ca] rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow pl-10"
                    placeholder="Enter your Instagram link"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaExternalLinkAlt  className="text-pink-600" />
                  </div>
                </div>
              </div>

              {/* extra */}
              <div className="w-[576px]">
              <label className="block mb-2 text-sm text-slate-800">
            Main Heading
              </label>
              <input
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
            </div>
          </div>
          </div>
          <div className="py-5">
            <h5 className={`text-sm font-semibold pb-2 border-b-4 border-[#696cff] inline-block  ${isDarkMode?'text-gray-50':'text-gray-800'}`} >
              Customize Card
            </h5>
          </div>
          {/* card */}
          <div className='flex gap-9 '>
          <div className="space-y-4 ">
            <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
            Main Heading
              </label>
              <input
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
            </div>
            <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph
              </label>
              <textarea
              rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
          
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
            Main Heading
              </label>
              <input
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
            </div>
            <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph
              </label>
              <textarea
              rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
          
            </div>
          </div>
          <div className="space-y-4 ">
            <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
            Main Heading
              </label>
              <input
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
            </div>
            <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph
              </label>
              <textarea
              rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Website Name"
              />
          
            </div>
          </div>
          </div>
          <div className="flex justify-center mt-6">
        <Button type="submit" className=  "px-10 bg-[#696cff] hover:bg-[#5b5efa] transition duration-300 ease-in-out" >Save Changes</Button>
          </div>
          </form>
    </div>
  )
}

export default FeatureInputForm