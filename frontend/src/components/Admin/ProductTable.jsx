import React, { useState, useRef, useEffect } from 'react';

const ProductTable = ({ isDarkMode }) => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // State to manage selected filter
  const [selectedFilter, setSelectedFilter] = useState('Last 30 days');
  
  // State to manage search input
  const [searchTerm, setSearchTerm] = useState('');
  
  // Reference for dropdown to handle outside clicks
  const dropdownRef = useRef(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  const products = [
    {
      id: 1,
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999',
    },
    {
      id: 2,
      name: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
    },
    {
      id: 3,
      name: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
    },
    {
      id: 4,
      name: 'Apple Watch',
      color: 'Silver',
      category: 'Accessories',
      price: '$179',
    },
    {
      id: 5,
      name: 'iPad',
      color: 'Gold',
      category: 'Tablet',
      price: '$699',
    },
    {
      id: 6,
      name: 'Apple iMac 27"',
      color: 'Silver',
      category: 'PC Desktop',
      price: '$3999',
    },
    {
      id: 7,
      name: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999',
    },
    {
      id: 8,
      name: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
    },
    {
      id: 9,
      name: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
    },
    {
      id: 10,
      name: 'Apple Watch',
      color: 'Silver',
      category: 'Accessories',
      price: '$179',
    },
    {
      id: 11,
      name: 'iPad',
      color: 'Gold',
      category: 'Tablet',
      price: '$699',
    },
    {
      id: 12,
      name: 'Apple iMac 27"',
      color: 'Silver',
      category: 'PC Desktop',
      price: '$3999',
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className={`relative overflow-x-auto mt-6 shadow-md sm:rounded-lg p-4 ${
        isDarkMode ? 'bg-[#1c1e21] text-gray-300' : 'bg-white text-gray-900'
      }`}
    >
      <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`inline-flex items-center focus:outline-none focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 ${
              isDarkMode
                ? 'text-gray-300 hover:bg-[#181717]'
                : 'bg-white hover:bg-gray-100'
            }`} 
            type="button"
          >
            <svg
              className="w-3 h-3 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
            </svg>
            {selectedFilter}
            <svg
              className="w-2 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div
              className={`z-10 absolute mt-2 w-48 divide-y divide-gray-100 rounded-lg shadow ${
                isDarkMode ? 'bg-[#1c1e21]' : 'bg-white'
              }`} 
            >
              <ul
                className={`py-2 space-y-1 text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
                aria-labelledby="dropdownRadioButton"
              >
                {['Last day', 'Last 7 days', 'Last 30 days', 'Last month', 'Last year'].map((filter) => (
                  <li key={filter}>
                    <div
                      onClick={() => handleFilterSelect(filter)}
                      className={`flex items-center p-2 rounded ${
                        isDarkMode
                          ? 'hover:bg-[#2f3236]'
                          : 'hover:bg-gray-100'
                      }`} 
                    >
                      <input
                        id={`filter-radio-${filter}`}
                        type="radio"
                        value={filter}
                        name="filter-radio"
                        checked={selectedFilter === filter}
                        onChange={() => handleFilterSelect(filter)}
                        className={`w-4 h-4 focus:ring-blue-500 ${
                          isDarkMode
                            ? 'text-gray-50 bg-gray-700 border-gray-600'
                            : 'text-blue-600 bg-gray-100 border-gray-300'
                        }`} 
                      />
                      <label
                        htmlFor={`filter-radio-${filter}`}
                        className="w-full ms-2 text-sm font-medium"
                      >
                        {filter}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative w-full sm:w-auto">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className={`block p-2 ps-10 text-sm border rounded-lg w-80 ${
                isDarkMode
                  ? 'bg-gray-700 text-gray-300 border-gray-600'
                  : 'bg-gray-50 text-gray-900 border-gray-300'
              } focus:ring-blue-500 focus:border-blue-500`} 
              placeholder="Search for items"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="w-full text-sm text-left text-gray-500">
        <thead
          className={`text-xs uppercase ${
            isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-700'
          }`} 
        >
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className={`w-4 h-4 ${
                    isDarkMode
                      ? 'border-gray-600 bg-gray-700'
                      : 'text-blue-600 bg-gray-100 border-gray-300'
                  } rounded focus:ring-blue-500`} 
                />
                <label htmlFor="checkbox-all-search" className="sr-only">
                  checkbox
                </label>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr
                key={product.id}
                className={`border-b ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                    : 'bg-white border-gray-200 hover:bg-gray-100'
                }`} 
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-${product.id}`}
                      type="checkbox"
                      className={`w-4 h-4 ${
                        isDarkMode
                          ? 'bg-gray-700 border-gray-600'
                          : 'text-blue-600 bg-gray-100 border-gray-300'
                      } rounded focus:ring-blue-500`} 
                    />
                    <label
                      htmlFor={`checkbox-${product.id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className={`px-6 py-4 font-medium whitespace-nowrap ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-900'
                  }`} 
                >
                  {product.name}
                </th>
                <td
                  className={`px-6 py-4 ${
                    isDarkMode ? 'text-slate-400' : ''
                  }`} 
                >
                  {product.color}
                </td>
                <td
                  className={`px-6 py-4 ${
                    isDarkMode ? 'text-slate-400' : ''
                  }`} 
                >
                  {product.category}
                </td>
                <td
                  className={`px-6 py-4 ${
                    isDarkMode ? 'text-slate-400' : ''
                  }`} 
                >
                  {product.price}
                </td>
                <td
                  className={`px-6 py-4 ${
                    isDarkMode ? 'text-slate-400' : ''
                  }`} 
                >
                  <a
                    href="#"
                    className={`font-medium ${
                      isDarkMode ? 'text-blue-500' : 'text-blue-600'
                    } hover:underline`} 
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } hover:bg-gray-50`} 
            >
              <td colSpan="6" className="px-6 py-4 text-center">
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
