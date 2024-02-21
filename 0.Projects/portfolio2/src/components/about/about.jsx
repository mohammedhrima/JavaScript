import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import me from '../../assets/IMG_2.jpg'

function About() {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className="me1">
          <img src={me} alt=''/>
        </div>

      <div className='container about_container'>
        <div className="about_content">

          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>1+ Year working</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>

          <p>
          Hi,<br></br>
          My name is Mohammed Hrima, a person who is fascinated with technology,<br></br>
          Welcome to my website.

        </p>
        </div>

        <a href='#contact' className='btn btn-primary'>feel free to contact me</a>
      </div>
    </section>
  )
}

export default About