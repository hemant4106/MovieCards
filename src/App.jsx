import { useState } from 'react'
import Slider from './components/Slider'
import Header from './components/Header'
import './App.css'
import MoviesByGenre from './components/Movielistbygenre'
import ProductionHouse from './components/ProductionHouse'
function App() {


  return (
    <div>
     <Header />
     <Slider />
     <ProductionHouse />
     <MoviesByGenre />
    </div>
  )
}

export default App
