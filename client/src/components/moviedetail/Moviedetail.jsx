import React, { useEffect, useState } from 'react'
import './movedetail.css'
import { StarIcon, CirclePlay, Heart } from 'lucide-react'
import dayjs from 'dayjs'
import axios from 'axios'

const Moviedetail = ({ movieId, setBuynow }) => {
    const [movie, setmovie] = useState(null)
    const [Color, setColor] = useState(true)
    const [isbuy, setisbuy] = useState(false)
    useEffect(() =>{
        const movies = async () =>{
            const response = await axios.post(`http://localhost:3000/movies/buymovie`,{movieid: movieId})
            setmovie(response.data)
        }
        movies()
    },[])
    const opentrailer = () => {
        window.open(movie.trailer, '_blank');
    };
    useEffect(()=>{
        setBuynow(isbuy)
    },[isbuy])

  return (
    <div className='allmovie_info'>
        <img src={movie?.image || 'default'} alt="" />
        <div className="movie_desc">
            <h2>{movie?.title || 'Loading...'}</h2>
            <p className='para'><StarIcon />{movie?.rating || 'Loading...'} &nbsp; User rating</p>
            <p className='movie_description'>{movie?.description || 'Loading...'}</p>
            <p className='para'>{movie?.duration || 'Loading...'} | {movie?.category || 'Loading...'} | {dayjs(movie?.publish_date).format('YYYY') || 'Loading...'}</p>
            <div className="movie_buttons">
                <button className='trailer_button' onClick={opentrailer}><CirclePlay />Watch Trailer</button>
                <button className='buy_ticket' onClick={() => setisbuy(prev => !prev)}>Buy Ticket</button>
                <Heart onClick={(e) =>{Color?(e.target.style.color= 'ab6906', setColor(false)) : (setColor(true), e.target.style.color= 'white')}} className='Heart'/>
            </div>
        </div>
    </div>
  )
}

export default Moviedetail
