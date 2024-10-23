import { useState } from "react"; 
import { FaFacebook, FaInstagram } from "react-icons/fa"; 
import { IoIosCamera } from "react-icons/io";

const InputForm = () => {
  const [image, setImage] = useState(null);
  const [buttonName, setButtonName] = useState("");
  const [buttonLink, setButtonLink] = useState("");

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
        {/* Image and Social Media Links in a Row */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-start">
          {/* Image Upload Section */}
          <div className="relative flex flex-col w-full max-w-sm min-w-[200px]">
            <label className="block mb-2 text-sm text-slate-600">Upload Logo</label>
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
              className="cursor-pointer rounded-md border-2 border-gray-300 relative hover:shadow-lg transition-shadow duration-200 ease-in-out"
              style={{
                width: "100%",
                height: "200px",
                backgroundImage: image
                  ? `url(${image})`
                  : "url('/static/metronic/tailwind/docs/dist/assets/media/avatars/blank.png')",
                backgroundSize: "contain",
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
                className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full transition-all duration-200"
                onClick={removeImage}
              >
                ✖
              </button>
            )}
            {image ? (
              <span className="text-sm text-gray-500 mt-2">Image uploaded</span>
            ) : (
              <span className="text-sm text-gray-400 mt-2">Click to upload</span>
            )}
          </div>

          {/* Social Media Link Inputs with Button Inputs */}
          <div className="w-full max-w-md space-y-4">
            {/* Website Name Input */}
            <div className="grid grid-cols-2 gap-80">
              <div className="w-[370px]">
                <label className="block mb-2 text-sm text-slate-800">Website Name</label>
                <input
                  className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter Your Website Name"
                />
              </div>
              {/* Button Name Input */}
              <div className="w-[370px]">
                <label className="block mb-2 text-sm text-slate-600">Button Name</label>
                <input
                  type="text"
                  className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-200 rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter the Button Name"
                  value={buttonName}
                  onChange={(e) => setButtonName(e.target.value)}
                />
              </div>
            </div>

            {/* Social Media Link Inputs */}
            <div className="grid grid-cols-2 gap-80">
              {/* Facebook Link Input */}
              <div className="w-[370px]">
                <label className="block mb-2 text-sm text-slate-600">Facebook</label>
                <div className="relative">
                  <input
                    type="url"
                    className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-200 rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow pl-10"
                    placeholder="Enter your Facebook link"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaFacebook className="text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Button Link Input */}
              <div className="w-[370px]">
                <label className="block mb-2 text-sm text-slate-600">Button Link</label>
                <input
                  type="url"
                  className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-200 rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                  placeholder="Enter the Button Link"
                  value={buttonLink}
                  onChange={(e) => setButtonLink(e.target.value)}
                />
              </div>
            </div>

            {/* Instagram Link Input */}
            <div className="grid grid-cols-2 gap-80">
              <div className="w-[370px]">
                <label className="block mb-2 text-sm text-slate-800">Instagram</label>
                <div className="relative">
                  <input
                    type="url"
                    className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-800 text-sm border border-slate-200 rounded-md px-5 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow pl-10"
                    placeholder="Enter your Instagram link"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaInstagram className="text-pink-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button Centered */}
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-2 rounded-md shadow hover:bg-blue-700 transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
