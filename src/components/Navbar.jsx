import React, { useState } from 'react';
import { Link } from 'react-router-dom';  

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
    
        <div className="text-white text-2xl font-semibold">
          MovieDb
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-white">
          <Link
            to="/HomePage"
            className="hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
          >
            Popular
          </Link>
          <Link
            to="/TopRatePage"
            className="hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
          >
            Top Rated
          </Link>

          <Link
            to="/UpcomingPade"
            className="hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
          >
            Top Rated
          </Link>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Movie Name ..."
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
