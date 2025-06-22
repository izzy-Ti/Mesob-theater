import React from 'react'
import './Hero.css'
import { Calendar1Icon, Clock11Icon, ChevronLeft, ChevronRight } from 'lucide-react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'

const Herosection = () => {
  const link = 'http://localhost:3000/'
  const [moviesList, setmoviesList] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(()=>{
  const Newestmovies = async () =>{
      try{
        const response = await axios.get(`http://localhost:3000/movies/movielist`)
        setmoviesList(response.data)
      } catch (error){
        console.log('error fetching data')
      }
  }
  Newestmovies()
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


  useEffect(() => {
  if (!moviesList.length) return;

  const interval = setInterval(() => {
    setCurrentIndex(prevIndex =>
      prevIndex === moviesList.length - 1 ? 0 : prevIndex + 1
    );
  }, 8000);

  return () => clearInterval(interval); 
}, [moviesList]);


  const currentMovie = moviesList[currentIndex]
  return (
    <>
    <div className='hero' style={{backgroundImage:  `url(${currentMovie?.Front_image?.replace('/upload/', '/upload/f_auto,q_auto:best/')})`}}>
      <div className="hero_component">
        <div className="hero_arrow">
          <div className="hero_title">   
            <h1 onClick={handlePrev}><ChevronLeft  className='arrowR'/></h1>
            <div className='hero_title_container'>
              <h1 style={{fontSize: 100}} className='movie_title'>{currentMovie?.title || 'Loading...'}</h1>
            </div>
          </div>
          <div className="hero_body">
          </div>
          <h1 onClick={handleNext}  ><ChevronRight  className='arrowL'/></h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default Herosection
