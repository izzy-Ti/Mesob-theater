import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import './Navbar.css'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'

const Navbar = () => {
    const menu = useRef()
    const nav = useRef()
    const navigate = useNavigate()
    const toggel = (e) =>{
        menu.current.style.top = '0px'
    }
    const close = () =>{
        menu.current.style.top = '-1000px'
    }
    const {user} = useUser()
    const {openSignIn} = useClerk()
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
        {
            !user ? (<button className='nav_login' onClick={openSignIn}>Login</button>) : (
            <UserButton className='nav_userpp'>
                <UserButton.MenuItems>
                    <UserButton.Action label='My Bookings' labelIcon={<TicketPlus width={15}/>} onClick={() =>navigate('/my-bookings')}/>
                </UserButton.MenuItems>
            </UserButton>)
        }
        <MenuIcon className='nav_menu_icon' onClick={toggel}/>
    </div>
    </div>
  )
}

export default Navbar
