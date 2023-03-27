import React from 'react'
import './Footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'></a>
    
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
      <a href='https://facebook.com'><AiOutlineFacebook /></a>
      <a href='https://instagram.com'><BsInstagram /></a>
      <a href='https://github.com'><AiOutlineGithub /></a>
      <a href='https://linkedin.com'><AiOutlineLinkedin /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pruthvi Parade. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer