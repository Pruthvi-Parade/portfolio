import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/pruthvi-parade-2040b0248/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Pruthvi-Parade' target='_blank'><FaGithub /></a>
        <a href='https://www.instagram.com/parade_pruthvi/' target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial