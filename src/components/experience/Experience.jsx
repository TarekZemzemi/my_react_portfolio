import React from 'react'
import "./Experience.css"
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
      <h5> The Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
                <h4>HTML</h4>
                <small className='text-ligh'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-ligh'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
                  <h4>JavaScript</h4>
                  <small className='text-ligh'>Experienced</small>
             </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-ligh'>Experienced</small>
            </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
             <div>
                <h4>Reactjs</h4>
                <small className='text-ligh'>Experienced</small>
             </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-ligh'>Experienced</small>
                </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>fastApi</h4>
                <small className='text-ligh'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
              <div>
                <h4>Spring Boot</h4>
                <small className='text-ligh'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon"/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-ligh'>Experienced</small>
            </div>
            </article>
          
          </div>
        </div>



      </div>
    </section>
  )
}

export default Experience