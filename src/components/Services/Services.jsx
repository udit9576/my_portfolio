import React from 'react'
import './services.css';
import { FaDotCircle } from 'react-icons/fa'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className='service'>
          <div className="service_head">
            <h3>API Development</h3>
          </div>
          <ul className='service__list'>
            <li>

              <FaDotCircle className='service__list-icon' />
              <p className='text_light'>Django REST APIs</p>

            </li>
            <li>
              <FaDotCircle className='service__list-icon' />
              <p className='text_light'>ExpressJS APIs</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaDotCircle className='service__list-icon' />
              <p className='text_light'>Responsive Websites</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service_head">
            <h3>Android Application Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaDotCircle className='service__list-icon' />
              <p className='text_light'>MotionScene</p>
            </li>
            <li>
              <FaDotCircle className='service__list-icon' />
              <p className='text_light'>Material Design</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services