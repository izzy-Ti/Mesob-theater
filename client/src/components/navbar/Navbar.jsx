import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { MenuIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'
import {useClerk, UserButton, useUser} from '@clerk/clerk-react'
import axios from 'axios'
import { useEffect } from 'react'

const Navbar = ({setloggin}) => {
    const [isloggedin , setisloggedin] = useState(false)
    const [user, setuser] = useState([])
    const [loggedout , setloggedout] = useState()
    const menu = useRef()
    const nav = useRef()
    const navigate = useNavigate()
    useEffect(() => {
        const loggedin = async  ()=>{
            const response = await axios.get('http://localhost:3000/user/loggeduser', {
                withCredentials: true
            })
            if (response.data.loggedin) {
                setisloggedin(true);
                setuser(response.data.user);
            } else {
                setisloggedin(false);
                setuser(null);
            }
    }
    loggedin();
    }, [])
    const logout = async () =>{
        const response = await axios.post('http://localhost:3000/user/logout', {}, { withCredentials: true })
        setloggedout(response.data.loggedout)
        if (response.data.loggedout) {
            window.location.reload();
        }
    }
    const toggel = (e) =>{
        menu.current.style.top = '0px'
    }
    const close = () =>{
        menu.current.style.top = '-1000px'
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
        <Link className = "nav_links" to = '/releases' >Releases</Link>
        <Link className = "nav_links" to='/favorites' >Favorites</Link>
        <Link className = "nav_links" to='/my-bookings' >My bookings</Link>
    </div>
    <div className='nav_right'>
        <SearchIcon className='nav_search'/>
        {isloggedin? (
            <div className='Drop_down'>
                <p className='user_name'>{user?.First_name || 'Loading...'}</p>
                <div className="logout_list">
                    <p onClick={logout}>Logout</p>
                </div>
            </div>

        ):(
            <button className='nav_login'>Login</button>
        )}
    </div>
    </div>
  )
}

export default Navbar
