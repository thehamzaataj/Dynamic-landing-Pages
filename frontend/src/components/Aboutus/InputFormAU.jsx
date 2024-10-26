import { useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { Button } from "@material-tailwind/react";
const InputFormAU = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (e) => {
    e.preventDefault();
    setImage(null);
  };
  return (
    <div className="p-4">
      <form>
        <div className="flex gap-6 ">
          <div className="relative flex flex-col w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-sm text-slate-600">
              Upload Image
            </label>
            <input
              accept=".png, .jpg, .jpeg"
              name="avatar"
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <input name="avatar_remove" type="hidden" />

            <label
              htmlFor="image-upload"
              className="cursor-pointer rounded-md border-2 border-[#c4c7ca] relative hover:shadow-lg transition-shadow duration-200 ease-in-out"
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: image
                  ? `url(${image})`
                  : "url('/static/metronic/tailwind/docs/dist/assets/media/avatars/blank.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {!image && (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  <IoIosCamera className="text-6xl text-gray-600" />
                </div>
              )}
            </label>

            {image && (
              <button
                className="absolute top-9 right-2 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full transition-all duration-200"
                onClick={removeImage}
              >
                ✖
              </button>
            )}
            {image ? (
              <span className="text-sm text-gray-500 mt-2">Image uploaded</span>
            ) : (
              <span className="text-sm text-gray-400 mt-2">
                Click to upload
              </span>
            )}
          </div>

          <div className="space-y-4 ">
            <div className="w-[765px]">
              <label className="block mb-2 text-sm text-slate-800">
                Heading 1
              </label>
              <input
                className="w-full bg-transparent  bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Your Heading Here"
              />
            </div>
            <div className="w-[765px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph 1
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Paragraph"
              />
            </div>
          </div>
        </div>
        <div className="py-5">
            <h5 className="text-sm font-semibold pb-2 border-b-4 border-[#696cff] inline-block text-gray-800">
              Customize Tab
            </h5>
          </div>
        <div className="flex gap-8">
          
          <div className="space-y-4">
          <div className="w-[370px]">
            <label className="block mb-2 text-sm text-slate-800">Tab 1</label>
            <input
              className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Your Heading Here"
            />
          </div>
          <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph 1
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Paragraph"
              />
            </div>
          </div>

          <div className="space-y-4">
          <div className="w-[370px]">
            <label className="block mb-2 text-sm text-slate-800">Tab 2</label>
            <input
              className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Your Heading Here"
            />
          </div>
          <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph 2
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Paragraph"
              />
            </div>
          </div>

          <div className="space-y-4">
          <div className="w-[370px]">
            <label className="block mb-2 text-sm text-slate-800">Tab 3</label>
            <input
              className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Enter Your Heading Here"
            />
          </div>
          <div className="w-[370px]">
              <label className="block mb-2 text-sm text-slate-800">
                Paragraph 3
              </label>
              <textarea
                rows={5}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Enter Paragraph"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
        <Button className=  "px-10 bg-[#696cff] hover:bg-[#5b5efa] transition duration-300 ease-in-out" >Save Changes</Button>
          </div>
      </form>
    </div>
  );
};

export default InputFormAU;
