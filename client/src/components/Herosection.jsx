import React from 'react'
import './Hero.css'
import { assets } from '../assets/assets'
import { Calendar1Icon, Clock11Icon } from 'lucide-react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const Herosection = () => {
  const port = 'http://localhost:3000'
  const [moviesList, setmoviesList] = useState([])

  useEffect(()=>{
  const Newestmovies = async () =>{
  const response = axios.get(`${port}/movies/moviesearch`)

  setmoviesList(response.data)
  }
  },[])


  const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };


  return (
    <div className='hero' style={{ backgroundImage: `url(${images[currentIndex]})`}}>
      <button onClick={prevSlide}>Prev</button>
      <img src={moviesList.Front_image[currentIndex]}/>
      <button onClick={nextSlide}>Next</button>
      {moviesList.map((_, index)=>{
        <div className='hero_component'>
        <h1>Riri <br /> Williams</h1>
        <div className='hero_icons'>
            <span>Action | Adventure | Sci-Fi</span>
            <div className='hero_year'>
                <Calendar1Icon />2018
            </div>
            <div className='hero_time'>
                <Clock11Icon /> 2h 8m
            </div>
        </div>
        </div>

      })}

    </div>
  )
}}

export default Herosection
