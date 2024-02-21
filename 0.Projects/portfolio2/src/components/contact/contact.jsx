import React from 'react'
import { MdOutlineEmail, MdPhone } from 'react-icons/md'
import {FaLinkedin,FaGithub, FaStackOverflow} from 'react-icons/fa'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ftw1nh', 'template_kzmj7lq', form.current, 'NOTdy0rrxb3LKPSrE')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
          alert("message was sent")
      }, (error) => {
          console.log(error.text);
          alert("error !")
      });
  };


  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>To reach me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <p>Email</p>
            <a href='mailto:hrimadev@gmail.com' target={"_blank"}> hrimadev@gmail.com</a>
          </article>

          <article className="contact_option">
            <MdPhone className='contact_option-icon'/>
            <p>Phone / whatsapp number</p>
            <a href='https://api.whatsapp.com/send?phone=0657804824' target={"_blank"}> +212657804824</a>
          </article>

          <article className="contact_option">
            <FaLinkedin className='contact_option-icon'/>
            <p>Linkedin</p>
            <a href='https://www.linkedin.com/in/mohammed-hrima-5b08841b7/' target={"_blank"}> Mohammed Hrima</a>
          </article>

          <article className="contact_option">
            <FaGithub className='contact_option-icon'/>
            <p>Github</p>
            <a href='https://github.com/mohammedhrima' target={"_blank"}> mohammedhrima</a>
          </article>

          <article className="contact_option">
            <FaStackOverflow className='contact_option-icon'/>
            <p>StackOverFlow</p>
            <a href='https://stackoverflow.com/users/14290849/mohammed-hrima' target={"_blank"}> Mohammed Hrima</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name='message' rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact