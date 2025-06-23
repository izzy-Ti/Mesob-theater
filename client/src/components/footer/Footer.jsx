import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { MailIcon, MenuIcon, PhoneCallIcon, SearchIcon, TicketPlus, XIcon } from 'lucide-react'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_components">
      <div className="footer_upper">
        <div className="right_foot">
          <img src={assets.logo} className='footer_logo' alt="" />
          <p>Mesob Theater is more than just a movie house — it's a cultural hub
             inspired by the rich heritage of Ethiopia. Named after the iconic woven
              "mesob", a symbol of community and tradition.</p>
            <div className="store_img">
              <img src={assets.appStore} alt="" />
              <img src={assets.googlePlay} alt="" />
            </div>
        </div>
        <div className="middel_foot">
            <h3>Pages</h3>
            <div className='footer_links'>
            <Link className = "nav_links" to='/' >Home</Link>
            <Link className = "nav_links" to='/movies' >Movies</Link>
            <Link className = "nav_links" to='/' >Theaters</Link>
            <Link className = "nav_links" to = '/releases' >Releases</Link>
            <Link className = "nav_links" to='/favorites' >Favorites</Link>
            </div>
        </div>
        <div className="left_foot">
          <h3>Contact Us</h3>
          <div className="contact_info">
            <PhoneCallIcon /><p>+251 987637422938</p>
          </div>
          <div className="contact_info">
            <MailIcon /><p>Mesob@srafet.com</p>
          </div>
        </div>
      </div>
      <hr/>
      <div className="footer_lowwer">
        <p>Copyright 2024 &copy; Mesob Theater center All Right Reserved</p>
      </div>
      </div>
    </div>
  )
}

export default Footer
