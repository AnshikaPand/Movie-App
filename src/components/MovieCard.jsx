import React from "react";
import { FcRating } from "react-icons/fc";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="bg-gray-700 rounded-xl mt-18">
        <div className="rounded-2xl overflow-hidden m-5 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
        </div>
        <div className="mb-2">
          <p className="text-white text-xl text-center">
            {movie.original_title}
          </p>
          <p className="text-yellow-400 text-xl text-center flex items-center justify-center">
            <FcRating className="mr-2" /> Rating: {movie.vote_average}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
