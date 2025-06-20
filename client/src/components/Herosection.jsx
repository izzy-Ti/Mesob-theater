import React from 'react'
import './Hero.css'
import { assets } from '../assets/assets'
import { Calendar1Icon, Clock11Icon } from 'lucide-react'

const Herosection = () => {
  return (
    <div className='hero'>
        <div className='hero_component'>
            
        <img src={assets.marvelLogo} alt="" />
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
    </div>
  )
}

export default Herosection
