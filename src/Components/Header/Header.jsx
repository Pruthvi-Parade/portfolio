import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Pruthvi Parade</h1>
          <h4 className="text-light" style={{color: '#4db5ff'}}>Fullstack Developer</h4>
          <CTA />
          <HeaderSocial />
          <div className='me'>
            <img src={ME} alt="My photo"/>
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header