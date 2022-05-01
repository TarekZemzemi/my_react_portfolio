
import React from 'react'
import "./Header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import chaima3 from "../../assests/chaima3.png"

const Header = () => {
  return (
    <header>
     <div className="container header__container">

        <h5>Hello I'm</h5>
        <h1>Chaima Zemzemi</h1>
        <h5 className='text-light'>Commercial Professionel </h5>
        <CTA/>
        <HeaderSocials/>

        <div className="me">
                <img src={chaima3} alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll down</a>

     </div>

    </header>
  )

}

export default Header