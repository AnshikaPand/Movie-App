import React, { useState } from "react";

const Pagination = ({ page, setPage }) => {
  const nextPage = (pageNo) => {
    setPage(pageNo);
  };

  const prevPage = (pageNo) => {
    setPage(pageNo - 1);
  };

  return (
    <div className="flex items-center justify-center w-full mx-auto">
      <div className="flex items-center justify-center space-x-2 mt-6 h-full ">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          disabled={page === 1}
          onClick={() => prevPage(page)}
        >
          Prev
        </button>

        <div className="flex space-x-1">
          <button
            className={`px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white
                ${page === page && "bg-yellow-500"}`}
            onClick={() => nextPage(page)}
          >
            {page}
          </button>
          <button
            className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => nextPage(page + 1)}
          >
            {page + 1}
          </button>
          <button
            className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => nextPage(page + 2)}
          >
            {page + 2}
          </button>
          <button
            className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => nextPage(page + 3)}
          >
            {page + 3}
          </button>
          <button
            className="px-3 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-blue-500 hover:text-white"
            onClick={() => nextPage(page + 4)}
          >
            {page + 4}
          </button>
        </div>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => nextPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
