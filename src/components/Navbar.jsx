import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import { apiKey } from '../config';
import { FaHome, FaStar, FaFilm } from 'react-icons/fa';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!searchTerm) return; 

    setLoading(true); 
    setError(null); 

    try {
     
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&language=en-US&page=1`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      setMovies(data.results); 
    } catch (err) {
      setError('Failed to fetch movies. Please try again later.');
    } finally {
      setLoading(false);  // Reset the loading state
    }
  };

  return (
    <nav className="bg-gray-800 p-4 w-full  backdrop-blur-lg fixed  ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
    
        <div className="text-white text-2xl font-semibold">
          MovieDb
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-white">
        <Link
  to="/"
  className="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
>
  <FaHome />
  <span>Popular</span>
</Link>
<Link
  to="/top-rated"
  className="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
>
  <FaStar />
  <span>Top Rated</span>
</Link>
<Link
  to="/upcoming"
  className="flex items-center space-x-2 hover:bg-gray-700 px-4 py-2 rounded-md transition duration-300"
>
  <FaFilm />
  <span>Upcoming</span>
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

      
     {/* <div className="mt-4">
        {loading && <p className="text-white">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 p-4 m">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.original_title}
                  className="w-full h-auto rounded-md"
                />
                <p className="text-white text-xl text-center">{movie.original_title}</p>
                <p className="text-yellow-400 text-xl text-center">Rating: {movie.vote_average}</p>
              </div>
            ))
          ) : (
            <p className="text-white"></p>
          )}
        </div>
      </div> 
       */}
    </nav>
  );
};

export default Navbar;
