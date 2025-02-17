import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { apiKey } from "../config";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const location = useLocation();
  const queryParam = location.search.slice(1);

  const fetchMovies = async (queryParam) => {
    setIsLoading(true); // Ensures loading state resets on new search
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${queryParam}&page=1`
    );
    const movieData = await response.json();
    if (movieData.results.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
      setMovies(movieData.results);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies(queryParam);
  }, [queryParam]);

  if (isLoading) return <div className="loader mx-auto">Loading...</div>;

  return (
    <div className=" min-h-screen bg-gray-900 ">
      <div className="text-center text-white text-2xl ">
        {queryParam && !noResults ? (
          <h2>Results for "{queryParam}"</h2>
        ) : (
          <h2>Search for Movies</h2>
        )}
      </div>

      {/* No Results Section */}
      {noResults && (
        <div className="text-center text-white">
          <h3>No movies found for "{queryParam}". Try another search!</h3>
        </div>
      )}

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-8 pb-10 pt-6">
        {movies?.length > 0 &&
          movies?.map((movie, idx) => (
            <MovieCard movie={movie} key={`movie-${idx}`} />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
