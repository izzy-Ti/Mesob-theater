import React from 'react'
import './Hero.css'
import { assets } from '../assets/assets'
import { Calendar1Icon, Clock11Icon } from 'lucide-react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Herosection = () => {
  const link = 'http://localhost:3000/'
  const [moviesList, setmoviesList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
  const Newestmovies = async () =>{
      try{
        const response = await axios.get(`http://localhost:3000/movies/movielist`)
        setmoviesList(response.data)
        console.log(response.data)
      } catch (error){
        console.log('error fetching data')
      }
  }
  Newestmovies();
  },[])

  const currentMovie = moviesList[currentIndex]
  console.log({currentMovie})
  return (
    <>
    <div className='hero'>
      <div className="hero_component">
        <h1>{currentMovie.title}</h1>
      </div>
    </div>
    </>
  )
}

export default Herosection
