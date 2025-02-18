import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { apiKey } from '../config';
import { FaHome, FaStar, FaFilm, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}&language=en-US&page=1`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full backdrop-blur-lg fixed z-10 font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      
        <div className="text-white text-2xl font-semibold hidden sm:block">
          MovieDb
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white sm:mr-4">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        
        <div className={`absolute top-18 left-0 ml-8 w-full bg-gray-800 md:static md:flex md:space-x-4 text-white ${isMenuOpen ? 'block' : 'hidden'}`}>
          <NavLink
            to="/"
            className="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 transition duration-300"
          >
            <FaHome />
            <span>Popular</span>
          </NavLink>
          <NavLink
            to="/top-rated"
            className="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 transition duration-300"
          >
            <FaStar />
            <span>Top Rated</span>
          </NavLink>
          <NavLink
            to="/upcoming"
            className="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 transition duration-300"
          >
            <FaFilm />
            <span>Upcoming</span>
          </NavLink>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2 w-full md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Movie Name ..."
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full  sm:ml-5 sm:w-30 md:w-60" 
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
            onClick={() => navigate(`/search?${search}`)}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
