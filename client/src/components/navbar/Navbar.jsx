import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
import axios from 'axios'

const Navbar = ({setloggin}) => {
    const menu = useRef()
    const nav = useRef()
    const navigate = useNavigate()
    const toggel = (e) =>{
        menu.current.style.top = '0px'
    }
    const close = () =>{
        menu.current.style.top = '-1000px'
    }
    const login = async () =>{
        const response = await axios.post(`http://localhost:3000/movies/movielist`, {})
    }
  return (
    <div className='navbar' ref={nav}>
    <Link to='/' className='nav_logo'>
        <img src={assets.logo} alt="logo" className='nav_logo_img'/>
    </Link>
    <div className='nav_menu_items' ref={menu}>
        <XIcon className='nav_xicon' />
        <Link className = "nav_links" to='/' >Home</Link>
        <Link className = "nav_links" to='/movies' >Movies</Link>
        <Link className = "nav_links" to='/' >Theaters</Link>
        <Link className = "nav_links" to = '/releases' >Releases</Link>
        <Link className = "nav_links" to='/favorites' >Favorites</Link>
    </div>
    <div className='nav_right'>
        <SearchIcon className='nav_search'/>
        <button className='nav_login'>Login</button>
    </div>
    </div>
  )
}

export default Navbar
