import React from 'react'
import constgenrelist from "./constgenrelist"
import GlobalApi from '../services/GlobalApi'
import MovieArray from './MovieArray'
function Movielistbygenre() {
  const getmovie=()=>{GlobalApi.getMovieGenreById(constgenrelist.genere.id)}
  return (
    <div>
      {constgenrelist.genere.map((item)=>(
       <div className='pt-4 pb-4 w-[100vw]' ><h1 className='text-[22px] font-semibold text-white pl-3 pb-2'>{item.name}</h1> 
       <MovieArray id={item.id} /></div>
      ))}
    </div>
  )
}

export default Movielistbygenre

