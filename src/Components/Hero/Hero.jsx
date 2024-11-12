import React from 'react'
import './Hero.css'
import Profile from '../../assets/profile.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={Profile} alt="" />
      <h1><span>I'm Haileeyesus, </span></h1>
      <p>a website developer skilled in front-end and back-end technologies, dedicated to building responsive, user-friendly websites that deliver real value.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink  className='anchor_link' offset={50}  href='#contact'>Connect With Me</AnchorLink></div>
        <div className="hero-resume">
          <a href="Haileyesus CV.pdf" download="Haileyesus CV.pdf">
              <button className="btn primary-btn" aria-label="Get Resume">Get Resume</button>
            </a></div>
      </div>
    </div>
  )
}
export default Hero
