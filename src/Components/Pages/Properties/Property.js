import React from 'react'
import { useLoaderData } from 'react-router-dom'
import "./property.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import PropertyContact from './propertyContact';




const Property = () => {
  const property = useLoaderData();
  

  return (
    <div className='project'>
        {property.images && (
        <div>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={25}
            slidesPerView={window.innerWidth >= 720 ? 2 : 1} 
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className='slides'   
          >
          {property.images.map((imageUrl, index) => (
            <SwiperSlide key={index}>
                 <img key={index} src={imageUrl} alt={`Property ${index + 1}`} />
            </SwiperSlide>
            
          ))}
          </Swiper>
          <h2>{property.ProjectName}</h2>
          <div className='more-info'>
                <h3> About</h3>
                <p>{property.About}</p>
            </div>
        </div>
        )}
        <PropertyContact />
    </div>
  )
}
export default Property



