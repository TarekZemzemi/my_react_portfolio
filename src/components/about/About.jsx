import React from 'react'
import "./About.css"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import chaima1 from "../../assests/chaima1.png"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={chaima1} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
           
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla nemo voluptates tempore corrupti dignissimos cum perspiciatis molestiae. Qui repellendus quam quaerat ipsum totam architecto enim neque, error, at, ad repellat.

          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>
        
      </div>
      
    </section>
  )
}

export default About