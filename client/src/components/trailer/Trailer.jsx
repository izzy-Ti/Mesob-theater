import React from 'react'
import ReactPlayer from 'react-player'
import './trailer.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Trailer = () => {
    const [movielist , setmoviesList] = useState([])
    useEffect(()=>{
    const showList = async () =>{
        try{
            const response = await axios.get(`http://localhost:3000/movies/movielist`)
            setmoviesList(response.data)
            console.log(movielist)
        } catch (error){
            console.log(error)
        }
    }
    showList()
    },[])
  return (
    <div>
        {movielist.map((movie, index) =>{
            <div key={index} className='tariler_container'>
                <ReactPlayer url={movie?.trailer || 'Loading...'} />
            </div>
        })}
    </div>
  )
}

export default Trailer
