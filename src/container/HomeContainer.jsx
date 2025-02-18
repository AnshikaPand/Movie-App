import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { apiKey, apiUrl } from "../config";
import Pagination from "../components/Pagination";

const HomeContainer = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `${apiUrl}/popular?api_key=${apiKey}&language=en-US&page=${page}`
    );
    const responseData = await response.json();
    setMovies(responseData.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  if (isLoading) {
    return (
      <h1 className="text-4xl text-red-600 text-center mt-20 bg-gray-950">
        Loading...
      </h1>
    );
  }

  return (
    <div className="flex items-center justify-center flex-col bg-gray-900 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 p-4">
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={`movie-${index}`} />
        ))}
      </div>
      <Pagination setPage={setPage} page={page} />
    </div>
  );
};

export default HomeContainer;
