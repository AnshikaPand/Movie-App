import React from 'react'

const MovieCard = ({movie}) => {
  return (
   <>
   <div className='bg-gray-700'>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt=""  className=" "/>
      <p>{movie.original_title}</p>
      <p>Rating:{movie.vote_average}</p>
   </div>
  
   </>
  )
}

export default MovieCard
