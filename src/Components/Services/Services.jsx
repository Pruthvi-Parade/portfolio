import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services' >
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>            
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Make it Easy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Universal design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Flexibility in use</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Focus on the Experience.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Inclusive design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design with personality</p>
            </li>
          </ul>
        </article>

        {/* End of Card 1 */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>            
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Visual Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web Friendly</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Navigation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Information Accessibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Intuitiveness</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conversion</p>
            </li>
          </ul>
        </article>

        {/* End of Card 2 */}

        <article className='service'>
          <div className="service__head">
            <h3>Server-Side</h3>            
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logical Routing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Error Handling</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Database Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Stability and Security</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Compatibility</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Perspective</p>
            </li>
          </ul>
        </article>

        {/* End of Card 3  */}
      </div>
    </section>
  )
}

export default Services