import React from 'react';
import PortfolioItem from './portfolioItem';
import build1 from '../../Images/home-images/build1.jpeg';
import build2 from '../../Images/home-images/build2.jpeg';
import build3 from '../../Images/home-images/build4.jpeg';

import { motion } from "framer-motion"

const portfolioData = [
  {
    imageSrc: build1,
    title: 'Galactica',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus, quos quia ut ullam ducimus voluptatem dolores reiciendis voluptatum sint maxime, perferendis laboriosam eius commodi exercitationem accusamus, ad placeat perspiciatis.'
  },
  {
    imageSrc: build2,
    title: 'Galactica',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus, quos quia ut ullam ducimus voluptatem dolores reiciendis voluptatum sint maxime, perferendis laboriosam eius commodi exercitationem accusamus, ad placeat perspiciatis.'
  },
  {
    imageSrc: build3,
    title: 'Galactica',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatibus, quos quia ut ullam ducimus voluptatem dolores reiciendis voluptatum sint maxime, perferendis laboriosam eius commodi exercitationem accusamus, ad placeat perspiciatis.'
  }
];

const PortfolioSection = () => {
  return (
    <section className="portfolio">
      <motion.h2 
         intial={{x: 20}}
         whileInView={{ x: [100, 0]}}
         transition={{duration: 2}}
          className="service-head">Portfolio</motion.h2>
      <motion.div
          intial={{x: 0}}
          whileInView={{ x: [-300, 0]}}
          transition={{duration: 2}}
        className="line"></motion.div>
      {portfolioData.map((item, index) => (
           <PortfolioItem key={index} imageSrc={item.imageSrc} title={item.title} description={item.description} />
      ))}
    </section>
  );
}

export default PortfolioSection;
