
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
//import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import { motion, useScroll } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import 'swiper/swiper-bundle.css'
import build1 from '../Images/home-images/build1.jpeg';
import build2 from '../Images/home-images/build2.jpeg';
import build3 from '../Images/home-images/build4.jpeg';
import ServicesSection from './ServicesSection';
import PortfolioSection from './portfolio';
import Review from './Review';
import { useState } from 'react';

const Home = () => {
    const contentImages = [build1, build2, build3];
    const [scrollIn, setScrollIn] = useState(false)

    
   
    return (
        <section className="home" id="indie">
            <div  className="slide">      
                <motion.div 
                    initial={{y:0}}
                    whileInView={{y:[90, 0]}}
                    transition={{duration: 3}}
                    className="content">
                    <span> New projects </span>
                    <h3> The future of property investing. </h3>
                    <p>
                    Explore urban brilliance<br /> with Oyster Properties offering a diverse collection of dream homes and dynamic workspaces that redefine luxury living and workspace innovation. 
                    </p>
                    <NavLink to="properties" className="btn">Get Started</NavLink>
                </motion.div>

                <Swiper
                    modules={[Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className='home-slider'
                >
                    {contentImages.map((src, index) => (
                        <SwiperSlide key={index} className='t'>
                            <div className="image">
                                <img src={src} alt={`Slide ${index}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ServicesSection />
            <PortfolioSection />
            <Review/>
        </section>
    )  
}

export default Home