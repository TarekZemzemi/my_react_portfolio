import React from 'react'
import "./Footer.css"
import {FaFacebookF} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {IoLogoTwitter} from "react-icons/io"
const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Chaima Zemzemi</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#Portfolio">Portfolio</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#Testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
          <a href="https://facebook.com"><FaFacebookF/></a>
          <a href="https://twitter.com"><BsInstagram/></a>
          <a href="https://instagram.com"><IoLogoTwitter/></a>
        </div>

        <div className="footer__copyright">
          <small>&copy; limitlessDev. All right reserved . </small>
        </div>
    </footer>
  )
}

export default Footer