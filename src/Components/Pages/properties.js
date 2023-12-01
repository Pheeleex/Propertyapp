import React, { useState } from 'react';
import FilterForm from '../Forms/FilterForm';
//import useGetProperties from '../Hooks/useGetProperties';
import Product from '../Images/Properties/manor2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import SearchBar from '../structure/SearchBar';
import { motion } from 'framer-motion';
import "../structure/properties.css"

const Properties = () => {
  const propertiesWithImages = useLoaderData();
  const [filterCriteria, setFilterCriteria] = useState({
    Service: '' , mainPrice:'', maxPrice:'', Bedroom:'', State:''
  })
  const [showFilterForm, setShowFilterForm] = useState(false);
   const handleFilterClick = () => {
    setShowFilterForm(prev => !prev)
    console.log("filter button clicked")
   }

   const closeFilterForm = () => {
    setShowFilterForm(false)
   }

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria)
    console.log(criteria, "criteria")
  }

  const filteredProperties = propertiesWithImages.filter((prop) => {
    const mainPriceCondition = !filterCriteria.mainPrice || prop.ProjectAmount >= parseInt(filterCriteria.mainPrice);
    const maxPriceCondition = !filterCriteria.maxPrice || prop.ProjectAmount <= parseInt(filterCriteria.maxPrice);
    
    return (
      (filterCriteria.Service ? prop.Service === filterCriteria.Service : true) &&
      (filterCriteria.Bedroom ? prop.Bedroom === filterCriteria.Bedroom : true) &&
      (filterCriteria.State ? prop.State === filterCriteria.State : true) &&
      mainPriceCondition &&
      maxPriceCondition
      )
  })
  console.log('Filtered Properties:', filteredProperties);

  return (
    <div>
      <section className="products">
        <div className="image-box">
          <img src={Product} alt="Product Image" className="image" />

          <div className="text-overlay">
            <h2>Our Current Products</h2>
            <p>
              Here, you can find out more about the character of our investment opportunities. We offer a wide range of
              products and services designed to help you make informed decisions about your investments.
            </p>
          </div>
        </div>
      </section>

      <div className='filter'>
        <SearchBar placeholder={"Enter Location"} handleFilterClick={handleFilterClick} />
      </div>
    <div className='projects'>
    {filteredProperties.map((prop) => (
        <div 
          key={prop.id} className="products-slide">
          <div className="bucket">
            <motion.div 
                initial={{y: 100}}
                whileInView={{y: [75, 50, 25, 0]}}
                className="features">
              <div className='name-amount'>
                <h2>{prop.ProjectName}</h2>
                <h3>${prop.ProjectAmount}</h3>  
              </div>

             <div className='service-type'> 
                <h3>{prop.Service}</h3>
                <p>{prop.ProjectType}</p>
              </div>
              
              <span>{prop.Bedroom} {prop.Bedroom === 1 ? 'Bedroom' : "Bedrooms"}</span>
             
              <Link to={`property/${prop.id}`} key={prop.id} className="btn" onClick={() => (console.log("click"))}>
                Find Out More
              </Link>
            </motion.div>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            className="image-slide"
          >
           
              {prop.images.map((url, index) => (
                <SwiperSlide key={index}>
                  <img key={index} src={url} alt={`House ${index + 1}`} />
                </SwiperSlide>
              ))}
            
          </Swiper>
        </div>
      ))}
    </div>
    {showFilterForm && <FilterForm 
                          onFilterChange={handleFilterChange} 
                          isActive={showFilterForm} 
                          close={closeFilterForm}
                          />}
      
    </div>
  );
};

export default Properties;

