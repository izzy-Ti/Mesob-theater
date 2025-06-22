import React from 'react'
import { useEffect , useState} from 'react'
import './movielist.css'
import axios from 'axios'
import { ChevronLeft, ChevronRight, StarIcon } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';


const Movielist = () => {
    const [movieId, setmovieId] = useState('')
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
    const movies = movielist
    const navigate = useNavigate()
    const addtoFavorite = async () =>{
        const addtoFav = await axios.post(`http://localhost:3000/movies/addfav`, 
            {movieId}
        )
    }
  return (
    <div className='movie_list'>
        <h1 className='list_header'>Latest movies</h1>
        <div className="movie_card">
        {movielist.map((movie,index) =>{
            return (
            <div key={index} className="movie_container" >
                <div className="movie_desc">
                    <img src={movie?.image || 'Loading...'} alt="" className='list_img'/>
                    <h3>{movie?.title || 'Loading...'}</h3>
                    <h1>{dayjs(movie?.publish_date).format('YYYY') || 'Loading...'}</h1>
                    <div className="set_ticket">
                        <button onClick={() =>{navigate(`/movies/${movie?._id || 'Loading...'}`)}}>Buy ticket</button>
                        <p>{movie?.rating || 'Loading...'}<StarIcon onClick={(e) =>{e.target.style.color = "orange", setmovieId(movie._id) , {addtoFavorite}}}/></p>
                    </div>
                </div>
            </div>
        )} )}
        </div>
        <button className='show_more' onClick={() =>{navigate('/movies')}}>Show more <ChevronRight/> </button>
      
    </div>
  )
}

export default Movielist
