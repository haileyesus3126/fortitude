import React from 'react'
import './About.css'

import profile from '../../assets/profile.png'
const About = () => {
  return (
    <div  id='about' className='about'>
      <div className="about-title">
      <h1>About Me</h1>
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p><b><i>I am a website developer</i></b> skilled in HTML, CSS, JavaScript, and frameworks like React.js for building responsive, user-centered designs. 
                I also work with back-end technologies, including Java and Spring Boot, to create well-rounded, functional web applications. 
                With a passion for coding and an eye for detail, I strive to deliver websites that are visually appealing, efficient, and impactful for users and clients.</p>
                
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Html</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"40%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"30%"}} /></div>
                <div className="about-skill"><p>Spring Boot</p><hr style={{width:"20%"}} /></div>
            </div>
        </div>
    </div>

    <div className="about-achievements">
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Years Of Experiance</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Projects Complited</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>1+</h1>
            <p>Happy clientse</p>
        </div>
        
        
    </div>
    </div>
    
  )
}

export default About
