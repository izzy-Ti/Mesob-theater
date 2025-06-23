import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const MovieDetails = () => {
  const { id } = useParams(); 

  useEffect(() => {

    console.log('Movie ID:', id);
  }, [id]);
  return (
    <div>
       <div>Movie ID: {id}</div>
    </div>
  )
}

export default MovieDetails
