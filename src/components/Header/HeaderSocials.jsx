import React from 'react'
import {FiLinkedin} from 'react-icons/fi';
import {FaHackerrank} from 'react-icons/fa';
import {AiFillGithub} from 'react-icons/ai';
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/'><FiLinkedin/></a>
        <a href='https://www.hackerrank.com/'><FaHackerrank/></a>
        <a href='https://www.github.com/'><AiFillGithub/></a>
    </div>
  )
}

export default HeaderSocials