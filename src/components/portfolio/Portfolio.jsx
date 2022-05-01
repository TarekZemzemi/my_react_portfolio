import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assests/portfolio1.jpg"
import IMG2 from "../../assests/portfolio2.jpg"
import IMG3 from "../../assests/portfolio3.jpg"
import IMG4 from "../../assests/portfolio4.jpg"
import IMG5 from "../../assests/portfolio5.png"
import IMG6 from "../../assests/portfolio6.jpg"
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" taget='_blank'>Live demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>

          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" taget='_blank'>Live demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>

          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" taget='_blank'>Live demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>

          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" taget='_blank'>Live demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>

          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" taget='_blank'>Live demo</a>

          </div>
          
        </article>
        <article className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>

          <h3>This is the portfolio item title</h3>
          <div className="portfolio__item-cta">

          <a href="https://github.com" className="btn">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" taget='_blank'>Live demo</a>

          </div>
          
        </article>

      </div>
    </section>
  )
}

export default Portfolio