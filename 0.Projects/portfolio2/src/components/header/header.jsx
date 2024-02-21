import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/logo_1.jpg'
import HeaderSocials from './headerSocials'

function Header() {
  return (
    <header>
      <div className="me">
          <img src={me} alt=''/>
        </div>

      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Hrima Mohammed</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <h5 className="text-light">and</h5>
        <h5 className="text-light">Software Developer</h5>
        <CTA/>
        {HeaderSocials()}
        

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
