import React from 'react'
import { useEffect , useState} from 'react'
import axios from 'axios'
import { ChevronLeft, ChevronRight, StarIcon } from 'lucide-react'
import { Navigate, useNavigate } from 'react-router-dom'
import dayjs from 'dayjs';


const Movies = ({setmovieid}) => {
    const [movieId, setmovieId] = useState('')
    const [movielist , setmoviesList] = useState([])
    useEffect(()=>{
    const showList = async () =>{
        try{
            const response = await axios.get(`http://localhost:3000/movies/allmovie`)
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
    <div className='allmovie_list'>
        <h1 className='list_header'>All movies</h1>
        <div className="movie_card">
        {movielist.map((movie,index) =>{
            return (
            <div key={index} className="movie_container" >
                <div className="movie_desc">
                    <img src={movie?.image || 'Loading...'} alt="" className='list_img'/>
                    <h3>{movie?.title || 'Loading...'}</h3>
                    <h1>{dayjs(movie?.publish_date).format('YYYY') || 'Loading...'}</h1>
                    <div className="set_ticket">
                        <button onClick={() =>{navigate(`/movies/${movie._id}`)}}>Buy ticket</button>
                        <p>{movie?.rating || 'Loading...'}<StarIcon onClick={(e) =>{e.target.style.color = "orange", setmovieId(movie._id) , {addtoFavorite}}}/></p>
                    </div>
                </div>
            </div>
        )} )}
        </div>      
    </div>
  )
}

export default Movies
