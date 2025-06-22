import React, { useState } from 'react'
import Login from '../components/login/Login'
import Herosection from '../components/hero/Herosection'
import Navbar from '../components/navbar/Navbar'
import Movielist from '../components/movielist/Movielist'
import Trailer from '../components/trailer/Trailer'

const Home = () => {
  return (
    <>
      <Herosection />
      <Movielist />
      <Trailer />
      <Login />
    </>
  )
}

export default Home
