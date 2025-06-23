import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Moviedetail from '../components/moviedetail/Moviedetail';
import Movielist from '../components/movielist/Movielist';

const MovieDetails = () => {
  const { id } = useParams(); 
  return (
    <div>
      <Moviedetail movieId={id} />

      <Movielist />
    </div>
  )
}

export default MovieDetails
