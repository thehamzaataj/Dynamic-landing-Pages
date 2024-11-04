import { FaEdit, FaTrash } from 'react-icons/fa';

const ViewTestimonial = ({ testimonials, onDelete, onEdit }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="p-4">Image</th>
            <th scope="col" className="px-6 py-3">Name</th>
            <th scope="col" className="px-6 py-3">Position</th>
            <th scope="col" className="px-6 py-3">Description</th>
            <th scope="col" className="px-6 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4">No testimonials available.</td>
            </tr>
          ) : (
            testimonials.map(({ id, name, position, description, image }) => (
              <tr key={id} className="bg-white border-b hover:bg-gray-50">
                <td className="p-4">
                  <img className="w-16 h-16 rounded-full" src={image} alt={name} />
                </td>
                <td className="px-6 py-4 font-bold text-black">{name} {id}</td>
                <td className="px-6 py-4">{position}</td>
                <td className="px-6 py-4 w-[550px]">{description}</td>
                <td className="px-2 py-4">
                  <button onClick={() => onEdit({ id, name, position, description, image })} className="text-blue-600 hover:underline">
                    <FaEdit className='text-[20px]' />
                  </button>
                  <button onClick={() => onDelete(id)} className="ml-4 text-red-600 hover:underline">
                    <FaTrash className='text-[20px]' />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTestimonial;
