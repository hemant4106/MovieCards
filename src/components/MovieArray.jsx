import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
function MovieArray({id}) {
    const [movielist ,setmovielist]=useState([])
    useEffect(()=>{getmovie(id)},[])
    function getmovie(id){
        GlobalApi.getMovieGenreById(id).then(resp=>{setmovielist(resp.data.results)})
    }
  return (
    <div className='flex gap-6 w-[100vw] bg-[#131520] pl-2 pr-2 overflow-auto scrollbar-hide'>
      {movielist.map((item,index)=>(
        
          <img  src={`https://image.tmdb.org/t/p/w500/${movielist[index].poster_path}`} className=' min-h-[20vh] max-h-[40vh] sm:h-[20vh] md:h-[20vh] lg:h-[40vh] hover:border-[3px] shadow-lg rounded-lg '  alt="" /> 
        
      ))}
    </div>
      )
}

export default MovieArray
