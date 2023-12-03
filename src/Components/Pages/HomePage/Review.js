import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import "./reviews.css"
import { motion } from 'framer-motion';

const Review = () => {
  return (
    <div>
      <section className="reviews">
        <motion.h2 
            intial={{x: 0}}
            whileInView={{ x: [180, 90, 45, -15]}}
            transition={{duration: 2}}
          className="service-head">Reviews</motion.h2>
        <div className="review-container">
          <div className="sample">
            <h3>Don't just take our word for it</h3>
            <p>
              Our investors are at the heart of what we do – and their
              feedback speaks volumes about the success of our property investment mission. Beautiful homes. Sustainable growth.
            </p>
            <button>Read all reviews</button>
          </div>
          <Swiper
            modules={[Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={100}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className='review'
          >
            <SwiperSlide className='t'>
              <div className="slid">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
                  cumque inventore quaerat aliquam officia laboriosam fugit fugiat cupiditate ratione.
                </p>
                <p className="name">Ahile Gregory,<br /> <span>OP investor</span></p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="slid">
                <div className="stars">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt,
                  cumque inventore quaerat aliquam officia laboriosam fugit fugiat cupiditate ratione.
                </p>
                <p className="name">Ahile Gregory,<br /> <span>OP investor</span></p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Review;