import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import './booking.css'
import axios from 'axios'
import dayjs from 'dayjs';
import { assets } from '../../assets/assets';

const MovieBooking = ({ movieId ,setBuynow}) => {
const seat = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10",
                "B1","B2","B3","B4","B5","B6","B7","B8","B9","B10",
                "C1","C2","C3","C4","C5","C6","C7","C8","C9","C10",
                "D1","D2","D3","D4","D5","D6","D7","D8","D9","D10",
                "E1","E2","E3","E4","E5","E6","E7","E8","E9","E10",
                "F1","F2","F3","F4","F5","F6","F7","F8","F9","F10",
                "G1","G2","G3","G4","G5","G6","G7","G8","G9","G10"
] 
    const [selectedSeat, setselectedSeat] = useState([])
    const [selecteddate, setselecteddate] = useState([])
    const [movie, setmovie] = useState(null)
    const [logstate, setlogstate] = useState()
    const [date, setdate] = useState('')
    const [amount, setamount] = useState('')
    const [seats, setseats] = useState('')
    const [clicked, setClicked] = useState(false);
    const [bookingstat, setbookingstat] = useState();
    const detailBooking = async () =>{
        const response = await axios.post(`http://localhost:3000/movies/buymovie`,
            {movieid: movieId,
                date,
                amount,
                seats
            }, { withCredentials: true })
        setlogstate(response.data)
    }
    useEffect(() =>{
        const movies = async () =>{
            const response = await axios.post(`http://localhost:3000/movies/buymovie`,{movieid: movieId})
            setmovie(response.data)
        }
        movies()
    },[])
    const Booking = async () =>{
      const totalseats = selectedSeat.length
      const moviePrice = Number(movie?.price)
      const pay = (moviePrice*totalseats)
      const response = await axios.post(`http://localhost:3000/book/booking`,{
        movieId: movieId,
        date : selecteddate,
        seats: selectedSeat,
        amount: pay
      }, { withCredentials: true })
      setbookingstat(response.data)
    }
    useEffect(()=>{
      if (bookingstat === undefined) return; 
      if(bookingstat.success){
        toast.success('Your Booking successfully placed')
        setBuynow(false)
      } else {
        toast.error('Please login or check ur Form')
      }
    }, [bookingstat])

    useEffect(() => {
        if (logstate !== undefined) {
        if (logstate.success) {
            toast.success('Booking placed')
        } else {
            toast.error('Please first login')
        }
        }
    }, [])
    const seatHndler = (e) => {
      const seat = e.target.innerText;
      setselectedSeat((s) => {
        if (s.includes(seat)) {
          e.target.style.background = "none";
          return s.filter((item) => item !== seat);
        } else {
          e.target.style.background = "#ab69069c";
          return [...s, seat];
        }
      });
    };
    const selectdate = (e) =>{
      const date = e.target.innerText;
      setselecteddate((s)=>{
      if(!s.includes(date)){
        e.target.style.border = "2px solid white"
        return [...s, date]
      } else {
        e.target.style.border = "none"
        return s.filter(i=> i !== date)
      }
      })
    }
  return (
    <div className='booker'>
      <div className="choose_date">
        <h3>Choose Date</h3>
        <div className="dates">
        {movie?.showtimes?.map((date,index) => {
            return (
            <div className='singel_date' key={index}>
            <p  onClick={selectdate}>{dayjs(date.showtimes).format('D') } {dayjs(date.showtimes).format('MMM') }</p>
            </div>)
        })}
      </div>
      </div>
      <div className='seat_ch'>
        <h1>Choose your seat</h1>
        <img src={assets.screenImage} alt="" className='screen_img'/>
        <p>Screen side</p>
      </div>
      <div className='choose_seat'>
        {seat.map((seat,index) =>{
            return (<div className='seatlist' >
                <button key={index} onClick={seatHndler}>{seat}</button>
            </div>)
        })}
      </div>
      <div className="seatselected">
        <p>Selected seats</p>
        <div className='flex_seats'>
        {selectedSeat.map((seat,index) =>{
          return(<p className='selectedseat' >{seat}</p>)
        })}
        </div>
      </div>
      <div className="book_button">
        <button onClick={Booking} className='order_booking'>Place Booking</button>
      </div>

    </div>
  )
}

export default MovieBooking
