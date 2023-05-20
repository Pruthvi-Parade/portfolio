import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/SS1.png'
import Img2 from '../../assets/SS2.png'
import Img3 from '../../assets/SS3.png'
import Img4 from '../../assets/SS4.png'

const data = [
  {
    id: 1,
    image: Img1,
    title: 'RFID Dashboards',
    github: 'https://github.com/Pruthvi-Parade/dashboard',
    demo: 'https://dribble.com'
  },
  {
    id: 2,
    image: Img2,
    title: 'Unified Logistics',
    github: 'https://github.com/Pruthvi-Parade/unified-logistics',
    demo: 'https://dribble.com'
  },
  {
    id: 3,
    image: Img3,
    title: 'Training and Placement Cell',
    github: 'https://github.com/Pruthvi-Parade/Training-Placement-cell',
    demo: 'https://dribble.com'
  },
  {
    id: 4,
    image: Img4,
    title: 'Face Vault',
    github: 'https://github.com/Pruthvi-Parade/face_vault',
    demo: 'https://dribble.com'
  }
]
const Portfolio = () => {
  return (
    <section id='services'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      
      <div className="container portfolio__container">
        {
          data.map((item) => {
            return(
              <article key={item.id}className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={item.image} alt=''/>
                </div>
                <h3>{item.title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={item.github} className='btn' target='_blank'>GitHub</a>
                  {/* <a href={item.demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio