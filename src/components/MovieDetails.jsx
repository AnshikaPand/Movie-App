import React, { useEffect, useState } from "react";
import { apiKey, apiUrl } from "../config";
import { useParams } from "react-router-dom";
import { FaStar, FaPlayCircle } from "react-icons/fa";

const MovieDetail = () => {
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  const fetchMovieDetails = async (id) => {
    const movieResponse = await fetch(
      `${apiUrl}/${id}?api_key=${apiKey}&language=en-US`
    );
    const movieData = await movieResponse.json();
    setMovie(movieData);
  };

  const fetchMovieCast = async (id) => {
    const castResponse = await fetch(
      `${apiUrl}/${id}/credits?api_key=${apiKey}&language=en-US`
    );
    const castData = await castResponse.json();
    console.log(castData.cast);
    setCast(castData.cast);
  };

  useEffect(() => {
    fetchMovieDetails(id);
    fetchMovieCast(id);
  }, [id]);

  return (
    <div className="container mx-auto pt-6 w-full bg-gray-900">
      {/* Movie Detail Section */}
      <div className="flex flex-col px-6 md:flex-row bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="mt-12">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-[380px] h-[450px] rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>

        <div className="md:w-2/3 md:pl-8 mt-15 md:mt-0 ">
          <h1 className="text-5xl font-bold text-white mt-15">{movie.title}</h1>
          <p className=" text-white text-xl mt-10">{movie.overview}</p>
          <p className="mt-6 text-white text-lg">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="mt-2 text-yellow-500 flex items-center text-lg">
            <strong>Rating:</strong>
            <span className="ml-2 flex items-center">
              <FaStar className="text-yellow-500 mr-1" />
              {movie.vote_average}
            </span>
          </p>

          <button className="mt-4 py-2 px-4 bg-blue-600 rounded-full text-white flex items-center hover:bg-blue-500 transition">
            <FaPlayCircle className="mr-2" />
            Watch Now
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-white px-6">Cast</h2>
        <div className="mt-6 overflow-x-auto">
          <div className="flex space-x-6">
            {cast.map((member) => (
              <div
                key={member.cast_id}
                className="text-center group flex-shrink-0 w-[250px]"
              >
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
                  <img
                    className="h-[300px] w-[250px] object-cover mx-auto rounded-lg"
                    src={
                      member.profile_path
                        ? `https://image.tmdb.org/t/p/w500${member.profile_path}`
                        : "https://via.placeholder.com/150"
                    }
                    alt={member.name}
                    loading="lazy"
                  />
                  <p className="text-sm font-medium text-white mt-3">
                    {member.name}
                  </p>
                  <p className="text-xs text-white">{member.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
