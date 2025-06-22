import React, { useState } from 'react'
import Login from '../components/login/Login'
import Herosection from '../components/hero/Herosection'
import Navbar from '../components/navbar/Navbar'
import Movielist from '../components/movielist/Movielist'

const Home = () => {
  return (
    <>
      <Herosection />
      <Movielist />
    </>
  )
}

export default Home
