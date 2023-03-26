import React from 'react'
import './About.css'
import me3 from '../../assets/me3.png'
import {FaAward, FaUser} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <div id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me3} alt=""/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200 + Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Tempora, esse rerum voluptates quo natus quidem incidunt ab
            odio laborum similique inventore, 
            possimus autem corporis eaque sapiente, eum consectetur sequi magni.
          </p>
          <a href='#contact' className='btn btn-primary'>get In Touch</a>
        </div>
      </div>
    </div>
  )
}

export default About