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
    const [showLogin, setshowLogin] = useState(false)
    const [First_name,setFirst_name] = useState('')
    const [Last_name,setLast_name] = useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [username,setusername] = useState('')
    const [profile, setprofile] = useState('')
    const [age,setage] = useState('')
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
        <XIcon className='nav_xicon' onClick={close}/>
        <Link to='/' onClick={() =>{scrollTo(0,0), close()}}>Home</Link>
        <Link to='/movies' onClick={() =>{scrollTo(0,0), close()}}>Movies</Link>
        <Link to='/' onClick={() =>{scrollTo(0,0), close()}}>Theaters</Link>
        <Link to='/' onClick={() =>{scrollTo(0,0), close()}}>Releases</Link>
        <Link to='/favorites' onClick={() =>{scrollTo(0,0), close()}}>Favorites</Link>
    </div>
    <div className='nav_right'>
        <SearchIcon className='nav_search'/>
        
        <button onClick={() =>{setloggin(true)}} className='nav_login'>Login</button>

    </div>

    </div>
  )
}

export default Navbar
