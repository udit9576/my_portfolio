import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='anim__container'>
          <div class="content">
            <div class="content__container">
              <p class="content__container__text">
                Hello
              </p>

              <ul class="content__container__list">
                <li class="content__container__list__item">world!</li>
                <li class="content__container__list__item">bob!</li>
                <li class="content__container__list__item">users!</li>
                <li class="content__container__list__item">everybody!</li>
              </ul>
            </div>
          </div>
        </div>
        <h5 className='text-light'>I am Udit Kinger, Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>

    </header>
  )
}

export default Header