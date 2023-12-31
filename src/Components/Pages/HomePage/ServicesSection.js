import React from 'react';
import ServiceCard from './serviceCard';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';


const servicesData = [
  {
    title: 'Buy/Sell',
    description: 'When you choose Oyster Properties, you can feel confident that you are investing in properties of exceptional quality, backed by a reputable and trustworthy company',
    link: 'properties'
  },
  {
    title: 'Rent',
    description: 'Choose from a wide variety of properties, whether for long or short stay we guarantee you will love everything we have to offer.',
    link: 'properties'
  },
  {
    title: 'Develop',
    description: 'We are committed to developing properties of the highest quality, with innovative designs and modern amenities. Our attention to detail sets us apart, ensuring that our properties exceed your expectations.',
    link: 'Contact'
  }
];

const ServicesSection = () => {
  return (
    <section className="services">
      <motion.h2
        intial={{x: 20}}
        whileInView={{ x: [100, -40]}}
        transition={{duration: 2}}
        className="service-head">Our Services</motion.h2>
      <motion.div
          intial={{x: 0}}
          whileInView={{ x: [-300, 0]}}
          transition={{duration: 2}}
        className="line"></motion.div>
        <h3 className='head'>Discover unparalleled property solutions with our dynamic property development firm</h3>
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Sell',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Buy',
        1000,
        'We Rent',
        1000,
        'We Develop',
        1000
      ]}
      wrapper="p"
      className='head'
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color:'brown', height: '100px' }}
      repeat={Infinity}
    />

      <div className="cards-container">
        {servicesData.map((service, index) => (
          <motion.div
          initial={{ scale: 0, y: 0 }}
          whileInView={{ scale:[ 0.6, 0.8, 1], y:[ 50, 0] }}
          transition={{duration: 1.8}}
          key={index} >
              <ServiceCard key={index} title={service.title} description={service.description} link={service.link} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
