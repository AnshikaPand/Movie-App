import React, { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { apiKey } from "../config";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const queryParam = location.search.slice(1);
  console.log(queryParam)

  const fetchMovies = async (queryParam) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${queryParam}&page=1`
    );
    const movieData = await response.json();
    setMovies(movieData.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies(queryParam);
  }, [queryParam]);

  if (isLoading) return <div className="loader"> </div>;
  return (
    <div className="bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-y-10 pb-10 pt-10">
        {movies?.length > 0 &&
          movies?.map((movie, idx) => (
            <MovieCard movie={movie} key={`movie-${idx}`} />
          ))}
      </div>
    </div>
  );
};

export default SearchBar;
