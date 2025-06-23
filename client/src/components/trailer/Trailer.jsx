import React from 'react'
import ReactPlayer from 'react-player'
import './trailer.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Trailer = () => {
    const [movielist , setmovielist] = useState([])
    const firstTrailer = movielist[0];
    const otherTrailers = movielist.slice(1);
    useEffect(()=>{
    const showList = async () =>{
        try{
            const response = await axios.get(`http://localhost:3000/movies/movielist`)
            setmovielist(response.data)            
        } catch (error){
            console.log(error)
        }
    }
    showList()
    },[])
  return (
        <div className='trailer_container'>
        <h1 className='trailer_title'>Some Trailers</h1>
        <div className="trailer">
        <div className="main_trailer_container">
        {firstTrailer && (
            <div className="main_trailer">
                <ReactPlayer url={`${firstTrailer.trailer}?modestbranding=1&rel=0&showinfo=0`} controls width="100%" height="500px"/>
            </div>
        )}
        </div>
        <div className="trailer_grid">
            {otherTrailers.map((movie, index) => (
            <div key={index} className="trailer_item">
                <ReactPlayer url={`${movie.trailer}?modestbranding=1&rel=0&showinfo=0`} controls width="100%" height="200px"/>

            </div>
            ))}
        </div>
        </div>
        </div>
  )
}

export default Trailer
