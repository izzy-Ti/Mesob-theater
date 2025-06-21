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
    const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === moviesList.length - 1 ? 0 : prevIndex + 1
    );
  };

    const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? moviesList.length - 1 : prevIndex - 1
    );
  };

  const currentMovie = moviesList[currentIndex]
  console.log({currentMovie})
  return (
    <>
    <div className='hero' style={{backgroundImage:  `url(${currentMovie?.Front_image?.replace('/upload/', '/upload/f_auto,q_auto:best/')})`}}>
      <div className="hero_component">
        <div className="hero_arrow">
        <h1 onClick={handlePrev}>&lt;</h1>
        
        <div className="hero_body">

        </div>
        <h1 onClick={handleNext}>&gt;</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Herosection
