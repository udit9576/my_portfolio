import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Udit Kinger</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer