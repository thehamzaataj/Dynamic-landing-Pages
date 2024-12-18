import { useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { Button } from "@material-tailwind/react";  
import ViewTestimonial from "./ViewTestimonial"; 
import { useDispatch,useSelector } from "react-redux";
import { addTestimonial ,updateTestimonial ,deleteTestimonial } from "../../Redux/testimonials/testimonials";

const InputTestimonialForm = ({isDarkMode}) => {
  const dispatch =  useDispatch();
  const testimonials = useSelector((state)=>state.testimonials.list)
  const [mainHeading, setMainHeading] = useState("");
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState(null);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && position && description) {
      const newTestimonial = {
        id: editingId || Date.now(),
        name,
        position,
        description,
        image,
      };

        if (editingId) {
          // return prevTestimonials.map((testimonial) =>
          //   testimonial.id === editingId ? newTestimonial : testimonial
          dispatch(updateTestimonial(newTestimonial))
        }
        else{
          dispatch(addTestimonial(newTestimonial))
        }
      resetForm();
    }
  };

  const resetForm = () => {
    setName("");
    setPosition("");
    setDescription("");
    setImage(null);
    setEditingId(null);
  };

  const handleEdit = (testimonial) => {
    setEditingId(testimonial.id);
    setName(testimonial.name);
    setPosition(testimonial.position);
    setDescription(testimonial.description);
    setImage(testimonial.image);
  };

  const handleDelete = (id) => {
    // setTestimonials((prevTestimonials) =>
    //   prevTestimonials.filter((testimonial) => testimonial.id !== id)
    // );
    dispatch(deleteTestimonial(id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-9">
        <div className="w-[950px]">
          <label className="block mb-2 text-sm text-slate-800">Main Heading</label>
          <input
            value={mainHeading}
            onChange={(e) => setMainHeading(e.target.value)}
            className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
            placeholder="Enter Your Heading Here"
          />
        </div>
        <div className="flex mt-7">
          <Button type="submit" className="px-10 bg-[#696cff] hover:bg-[#5b5efa]">
            {editingId ? "Update Testimonial" : "Save Testimonial"}
          </Button>
        </div>
      </form>

      <div className="py-5">
        <h5 className={`text-sm font-semibold pb-2 border-b-4 border-[#696cff] inline-block  ${isDarkMode ? 'text-gray-50':'text-gray-800'}` }>
          Add Your Testimonial
        </h5>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-9">
          <div className="relative flex flex-col">
            <label className="block mb-2 text-sm text-slate-600">Upload Image</label>
            <input
              accept=".png, .jpg, .jpeg"
              type="file"
              onChange={handleImageChange}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className={`cursor-pointer rounded-full  relative ${isDarkMode?'bg-gray-700':'border-[#c4c7ca] border-2 '}`}
              style={{
                width: "240px",
                height: "240px",
                backgroundImage: image
                  ? `url(${image})`
                  : "url('/static/metronic/tailwind/docs/dist/assets/media/avatars/blank.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "50%",
              }}
            >
              {!image && (
                <div className={`flex items-center justify-center h-full rounded-full ${isDarkMode?'bg-[#1c1e21]':'bg-gray-100'}`}>
                  <IoIosCamera className="text-6xl text-gray-600" />
                </div>
              )}
            </label>

            {image && (
              <button
                className="absolute top-56 right-[110px] bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full"
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

          <div className="space-y-4">
            <div className="w-[885px]">
              <label className="block mb-2 text-sm text-slate-800">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
                placeholder="Enter Your Name Here"
              />
            </div>
            <div className="w-[885px]">
              <label className="block mb-2 text-sm text-slate-800">Position</label>
              <input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
                placeholder="Enter Your Position Here"
              />
            </div>
            <div className="w-[885px]">
              <label className="block mb-2 text-sm text-slate-800">Description</label>
              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-transparent bg-slate-50 placeholder:text-slate-400 text-slate-700 text-sm border border-[#c4c7ca] rounded-md px-3 py-2"
                placeholder="Enter Your Description Here"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Button type="submit" className="px-10 bg-[#696cff] hover:bg-[#5b5efa]">
            {editingId ? "Update Testimonial" : "Save Testimonial"}
          </Button>
        </div>
      </form>

      <div className="py-6">
        <ViewTestimonial testimonials={testimonials} onDelete={handleDelete} onEdit={handleEdit} />
      </div>
    </div>
  );
};

export default InputTestimonialForm;
