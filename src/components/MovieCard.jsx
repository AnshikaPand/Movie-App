import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="bg-gray-700">
        <div className="rounded-2xl overflow-hidden m-4 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
             
          />
        </div>

        <p className="text-white text-xl text-center">{movie.original_title}</p>
        <p className="text-yellow-400 text-xl text-center">Rating:{movie.vote_average}</p>
      </div>

      
    </>
  );
};

export default MovieCard;
