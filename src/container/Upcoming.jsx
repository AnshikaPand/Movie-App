import React from 'react'
import { apiUrl, apiKey } from '../config'
import { useState, useEffect } from 'react'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'

const Upcoming = () => {
    const[data, setData] = useState([])
    const[page, setPage] = useState(1)
     const fetchData = async()=> {
     const response = await fetch(`${apiUrl}/upcoming?api_key=${apiKey}&language=en-US&page=${page}`)
     const data = await response.json()
     console.log(data.results)
     setData(data.results)
     }
    
    useEffect(()=>{
        fetchData()
    },[page])
  return (
    <div className="flex items-center justify-center flex-col bg-gray-900">
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 p-4">
      {data.map((movie, index) => (
        <MovieCard movie={movie} key={`movie-${index}`} />
      ))}
    </div>
    <Pagination setPage={setPage} page={page}/> 
  </div>
  )
}

export default Upcoming;
