import React, { useState } from 'react';
import { IoIosCamera } from "react-icons/io";

const ImageInput = ({isDarkMode}) => {
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

  const removeImage = () => {
    setImage(null);
  };

  return (
      <div className="flex justify-center">
        <div className="relative flex flex-col ">
        <label className="block mb-2 text-sm text-slate-600">Upload logo</label>
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
              width: '200px', 
              height: '200px', 
              backgroundImage: image
                ? `url(${image})`
                : "url('/static/metronic/tailwind/docs/dist/assets/media/avatars/blank.png')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >

            {!image && (
              <div className="flex items-center justify-center h-full bg-gray-100">
                <IoIosCamera className='text-6xl text-gray-600' />
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
      </div>
  );
};

export default ImageInput;
