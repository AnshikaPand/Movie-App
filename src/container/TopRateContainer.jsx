import React from 'react'
import { apiUrl, apiKey } from '../config'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react'

const TopRateContainer = () => {
    const[data, setData] = useState([])
     const fetchData = async()=> {
     const response = await fetch(`${apiUrl}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
     const data = await response.json()
     console.log(data.results)
     setData(data.results)
     }
    
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className="bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 p-4">

     
    {
      data.map((movie,index)=>(
          <MovieCard movie={movie} key={`movie-${index}`}/>
      ))
    }
   </div>
  )
}

export default TopRateContainer
