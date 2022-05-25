import React from 'react'
import './about.css';
import Me from '../../assets/me.jpg';
import {IoCodeWorkingSharp} from 'react-icons/io5';

const About = () => {
  return (
    <section id='about'>
      <h2>
        About Me
      </h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about_me-image'>
            <img src= {Me} alt='My Image'/>
          </div>
      </div>
      <div className='about__content'>
        <div className="about__cards">
          <article className='about__card'>
            <IoCodeWorkingSharp className='about_icon'/>
            <h5>Projects</h5>
            <small><a href='#'>Smart Complaint Management System</a></small><br></br>
            <small><a href='#'>VChat</a></small><br></br>
            <small><a href='#'>BeingSocial</a></small>
          </article>
        </div>
        <p>
      MCA graduate student offering a strong foundation in object-oriented programming principles,
networking, testing and code debugging. Motivated for learning new technologies. Proficient in developing
Web Applications, using ReactJS and NodeJS, building and deploying Django REST APIs and working with GraphQL.<br></br> Strong Communication and Business professional with a Degree in
Bachelor of Business Administration.
      </p>
      </div>
      
      </div>
      
     </section>
  )
}

export default About