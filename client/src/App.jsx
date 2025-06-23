import React from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast'
import Footer from './components/footer/Footer'
import Releases from './pages/releases.jsx'
import { useState } from 'react'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
          <Route path = '/' element = {<Home />}/>
          <Route path = '/movies' element = {<Movies />}/>
          <Route path = '/movies/:id' element = {<MovieDetails />}/>
          <Route path = '/movies/:id/:date' element = {<MovieDetails />}/>
          <Route path = '/my-bookings' element = {<MyBookings />}/>
          <Route path = '/favorite' element = {<Favorite />}/>
          <Route path = '/releases' element = {<Releases />}/>
          <Route path = '/' element = {<Home />}/>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
