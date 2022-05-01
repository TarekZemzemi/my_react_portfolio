import React from 'react'
import Profile from "../../assests/Profile.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Profile} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      
    </div>
  )
}

export default CTA