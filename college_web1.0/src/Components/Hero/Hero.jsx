import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>With the upgrade to a higher level of courses, the need to adopt the recent technological development and initiate research and development activities to better deal with related engineering problems, the Purwanchal campus is committed to achieving better quality results.</p>
        <button className='btn'>Explore more<img src={dark_arrow} alt=" "/></button>
      </div>
    </div>
  )
}

export default Hero