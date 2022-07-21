import React, { useState } from 'react'
import logo from '../../assets/websitelogo.png'
import './navbar.css'
import { FiUser } from 'react-icons/fi' 
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] = useState('journey')

  return (
    <nav>
        <Link to='/'><img src={logo} alt="websitelogo" className='logo' /></Link>
        <div className="nav__options">
            <Link to='/' onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}>HOME</Link>
            <Link to='/' onClick={() => setActive('journey')} className={active === 'journey' ? 'active' : ''}>THE JOURNEY</Link>
            <Link to='/team' onClick={() => setActive('team')} className={active === 'team' ? 'active' : ''}>TEAM</Link>
            <Link to='/store' onClick={() => setActive('store')} className={active === 'store' ? 'active' : ''}>STORE</Link>
            <Link to='/contact' onClick={() => setActive('contact')} className={active === 'contact' ? 'active' : ''}>CONTACT</Link>
        </div>
        <Link to='/' className='user'><FiUser size={21} /> GAGAN</Link>
    </nav>
  )
}

export default Navbar