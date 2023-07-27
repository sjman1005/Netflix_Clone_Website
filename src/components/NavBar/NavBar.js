import React from 'react'
import './NavBar.css'
import Icon from '../NavBar/search-3-16.png';

function NavBar() {

  const Icon = require('../NavBar/search-3-16.png');

  return (
    <div className='NavBar'>
        <span className='NavBarIcons1'>Home</span>
        <span className='NavBarIcons2'>TV Shows</span>
        <span className='NavBarIcons3'>Movies</span>
        <span className='NavBarIcons4'>New & Popular</span>
        <span className='NavBarIcons5'>My List </span>
        <span className='NavBarIcons6'>Browse by Languages</span>
        <img className='Logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
        <img className='Avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Member Login" />
        <input className='SearchArea' type="search"/>
        <img className='SearchIcon' src={Icon} alt="" />
        <span  className='NavBarIcons7'>Sign Up/Login</span>
    </div>
  )
}

export default NavBar