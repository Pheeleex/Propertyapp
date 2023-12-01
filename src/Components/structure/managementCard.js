// ManagementCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ManagementCard = ({ imageSrc, name, role }) => {
  return (
    <motion.div 
      initial={{y: 180}}
      whileInView={{y: [135, 90, 45, 0]}}
      transition={{duration: 2}}
      className="m-box">
      <div className="image-cards">
        <div className="image">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="desc">
          <p className="grade">Group Board</p>
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ManagementCard;
