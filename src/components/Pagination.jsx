import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center w-full mx-auto">
      <div className="flex items-center justify-center space-x-2 mt-6 h-full ">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          disabled
        >
          Prev
        </button>

        <div className="flex space-x-1">
          <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white">
            1
          </button>
          <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white">
            2
          </button>
          <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white">
            3
          </button>
          <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white">
            4
          </button>
          <button className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white">
            5
          </button>
        </div>

        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
