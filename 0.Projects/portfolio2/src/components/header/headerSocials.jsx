import React from 'react';
import {BsLinkedin,BsGithub,BsStackOverflow} from 'react-icons/bs'

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/mohammed-hrima-5b08841b7/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/mohammedhrima' target="_blank"><BsGithub/></a>
        <a href='https://stackoverflow.com/users/14290849/mohammed-hrima' target="_blank"><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocials