import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Web Developement</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Developing frontend website architecture.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Designing user interactions on web pages.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Developing back-end website applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Seeing through a project from conception to finished product.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ensuring responsiveness of applications.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Software Developement</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Produce clean, efficient code based on specifications</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ability to learn new languages and technologies</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Troubleshoot, debug and upgrade existing software</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Verify and deploy programs and systems</p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services