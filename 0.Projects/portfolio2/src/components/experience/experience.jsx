import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
          <div className="experince_frontend">
              <h3>Frontend Development</h3>
              <div className="experience_content">
              
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon' />
                  <div>
                    <h4>React js</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Figma</h4>
                   <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>HTML</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
           
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>CSS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>jQuery</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

              </div>
          </div>






          <div className="experience_backend">
          <h3>Backend Development</h3>
              <div className="experience_content">
    
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Node JS</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Mongo DB</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Express JS</h4>
                    <small className='text-light'>Experienced</small>
                  </div>
                </article>
                
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Python</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

              </div>
          </div>





          <div className="experience_software">
          <h3>Software Development</h3>
              <div className="experience_content">
                <article className='experience_details'>
                  <BsPatchCheckFill className='experience_details-icon'/>
                  <div>
                    <h4>Electron js</h4>
                    <small className='text-light'>Intermediate</small>
                  </div>
                </article>

              </div>
          </div>

      </div>
    </section>
  )
}

export default Experience