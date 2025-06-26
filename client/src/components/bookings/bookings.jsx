import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import './bookings.css'

const Booking = () => {
    const [booking,setbooking] = useState([])
    useEffect(()=>{
        const bookings = async  () =>{
            const response = await axios.get(`http://localhost:3000/book/mybooking`, {withCredentials: true})
            setbooking(response.data.bookings)
        }
        bookings()
    },[])
    console.log(booking)
  return (
    <div className='mybookings'>
      <h1>My bookings</h1>
      <div className="booking_list">
      {booking.map((book,index) =>{
        return (
          <div className='booking_box'   key={index}>
          <div className="inner_img">
            <img src={book.movieId.Front_image} alt=""/>
            <div className="inner_title">
              <h2>{book.movieId.title}</h2>
              <div>
              <p>{book.movieId.duration}</p>
              <p>{dayjs(book.movieId.showdate).format('ddd, MMMM D [at] hh:mm A')}</p>
              </div>
            </div>
          </div>
          <div className="inner_price">
            <h2>${book.amount}</h2>
            <div>
            <p> Total ticket: {book.seats.length}</p>
            <p className='all_seats'>Seats:&nbsp; <div >{book.seats.map((seat,index)=>{ return <p key={index}>{seat}</p>})}</div></p>
          </div>
          </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default Booking
