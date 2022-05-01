import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assests/avatar1.jpg"
import AVTR2 from "../../assests/avatar2.jpg"
import AVTR3 from "../../assests/avatar3.jpg"
import AVTR4 from "../../assests/avatar4.jpg"
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'   
      
          >
        <div className="client__avatar">
          <img src={AVTR1} alt="Avatar one" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, tempora dolorum doloribus debitis placeat quibusdam adipisci commodi laudantium, porro reprehenderit exercitationem error magni, quasi molestias modi cupiditate alias eaque!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR2} alt="Avatar one" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, tempora dolorum doloribus debitis placeat quibusdam adipisci commodi laudantium, porro reprehenderit exercitationem error magni, quasi molestias modi cupiditate alias eaque!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR3} alt="Avatar one" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, tempora dolorum doloribus debitis placeat quibusdam adipisci commodi laudantium, porro reprehenderit exercitationem error magni, quasi molestias modi cupiditate alias eaque!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
        <div className="client__avatar">
          <img src={AVTR4} alt="Avatar one" />
        </div>
        <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client_review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sit, tempora dolorum doloribus debitis placeat quibusdam adipisci commodi laudantium, porro reprehenderit exercitationem error magni, quasi molestias modi cupiditate alias eaque!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials