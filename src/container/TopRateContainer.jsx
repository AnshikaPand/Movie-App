import React from 'react'
import { apiUrl, apiKey } from '../config'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'
import Pagination from '../components/Pagination'

const TopRateContainer = () => {
  const[page, setPage] = useState(1)
    const[data, setData] = useState([])
     const fetchData = async()=> {
     const response = await fetch(`${apiUrl}/top_rated?api_key=${apiKey}&language=en-US&page=${page}`)
     const data = await response.json()
    
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

export default TopRateContainer
