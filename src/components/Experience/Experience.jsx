import React from 'react';
import './experience.css';
import { HiOutlineBadgeCheck } from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon' />
              <div>
                <h4>Html</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials '>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>CSS</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>Javascript</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>React</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>Jinja</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>Django</h4>
                <small class='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>ExpressJS</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>PostgreSQL</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>MySQL</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>Socket.IO</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__detials'>
              <HiOutlineBadgeCheck className='experience__detials-icon'/>
              <div>
                <h4>ASP.NET MVC</h4>
                <small class='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience