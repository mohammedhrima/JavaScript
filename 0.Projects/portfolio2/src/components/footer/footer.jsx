import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'

function footer() {
  return (
    <footer>
        <a href='#' className='footer_logo'><img src={logo} alt="" /></a>
        <ul className="permalinks">
            <li><a href='#'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Experience</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className="footer_copyright">
            <small>&copy; HrimaDev All rights reserved</small>
        </div>
    </footer>
    )
}

export default footer