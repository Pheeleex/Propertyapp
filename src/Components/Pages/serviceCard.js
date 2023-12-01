import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => {
  return (
    <div className="cards">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className='link'>See how it works</Link>
    </div>
  );
}

export default ServiceCard;
