import React from 'react'
import './About.css'
import me3 from '../../assets/me3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me3} alt="about image"/>
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Companies</h5>
              <small>2</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
          Software Developer with a passion for developing innovative programs. Looking forward for a challenging
          environment to work for individual development. Solution-driven web developer adept at contributing to 
          highly collaborative work environment and finding solutions.
          </p>
          <a href='#contact' className='btn btn-primary'>get In Touch</a>
        </div>
      </div>
    </section>
  )
}

export default About