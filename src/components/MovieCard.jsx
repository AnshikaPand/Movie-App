import React, { useState, useEffect } from "react";
import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  useEffect(()=>{
    setTimeout(()=>{setIsLoaded(true)},5000)
  },[])

  return (
    <Link to={`/${movie.id}`} className="bg-gray-700 rounded-xl mt-18">
      <div className="rounded-2xl overflow-hidden m-5">
        {!isLoaded && (
          <div className="skeleton-loader h-48 bg-gray-500 rounded-xl"></div>
        )}
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.original_title}
          loading="lazy"
          onLoad={handleImageLoad}
          className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        />
      </div>
      <div className="mb-2">
        <p className="text-white text-xl text-center">
          {!movie.original_title ? (
            <div className="skeleton-loader w-3/4 h-6 bg-gray-500 mx-auto"></div>
          ) : (
            movie.original_title
          )}
        </p>
        <p className="text-yellow-400 text-xl text-center flex items-center justify-center">
          {!movie.vote_average ? (
            <div className="skeleton-loader w-1/2 h-6 bg-gray-500 mx-auto"></div>
          ) : (
            <>
              <FcRating className="mr-2" /> Rating: {movie.vote_average}
            </>
          )}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
