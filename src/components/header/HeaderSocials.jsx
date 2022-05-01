import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {IoLogoInstagram} from "react-icons/io"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
           <a href="https://www.linkedin.com/in/chaima-zemzemi-151802124/" target="_blank"><BsLinkedin/></a> 
           <a href="https://www.facebook.com/daddoudorra2212" target="_blank"><FaFacebookF/></a> 
           <a href="https://www.instagram.com/chayma_hrk/" target="_blank"><IoLogoInstagram/></a> 

    </div>
  )
}

export default HeaderSocials