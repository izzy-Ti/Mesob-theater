import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Moviedetail from '../components/moviedetail/Moviedetail';
import Movielist from '../components/movielist/Movielist';
import MovieBooking from '../components/moviebooking/MovieBooking';

const MovieDetails = () => {
  const { id } = useParams(); 
  const [buynow, setBuynow] = useState(false);
  return (
    <div>
      <Moviedetail movieId={id} setBuynow = {setBuynow}/>
      {buynow &&  <MovieBooking movieId={id} setBuynow = {setBuynow}/>}
      <Movielist />
    </div>
  )
}

export default MovieDetails
