import React, { useState , useEffect } from 'react'
import Herosection from '../components/hero/Herosection'
import Navbar from '../components/navbar/Navbar'
import Movielist from '../components/movielist/Movielist'
import Trailer from '../components/trailer/Trailer'
import Login from './login/Login'
import axios from 'axios'

const Home = () => {
  const [isloggedin, setisloggedin] = useState()

  useEffect(() => {
    const loggedin = async  ()=>{
        const response = await axios.get('http://localhost:3000/user/loggeduser', {
            withCredentials: true
        })
        if (response.data.loggedin) {
            setisloggedin(true);
        } else {
            setisloggedin(false);
        }
  }
  loggedin();
  }, [])


  const [Authorized, setAuthorized] = useState(false)
  return (
    <>
      <Herosection />
      <Movielist />
      <Trailer />
      {!isloggedin && 
        <Login /> 
      }
    </>
  )
}

export default Home
