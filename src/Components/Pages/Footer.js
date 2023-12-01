import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-cont">
        <div className="footer-cont1">
          <i className="bi bi-house-fill">
          <NavLink to="/">Home</NavLink>
          </i>
          <p>
            Oyster Property Invest is a leading property investment company providing investors with an opportunity to diversify into the UK property market.
          </p>
        </div>

        <div className="footer-cont2">
          <div className="box">
            <h3>Location</h3>
            <p>
              Lagos Office: House 2 Crescent Cross Estate, Hakeem Dickson Link Road, Elf Bus Stop, Lekki Phase 1, Lagos.
            </p>
          </div>
          <div className="box bx">
            <h3>Quick Links</h3>
           <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="blog">Blog</NavLink>
          </div>
          <div className="box bx">
            <h3>Contact Info</h3>
            <p>+234558900</p>
            <p>soro@gmail.com</p>
          </div>
          <motion.div 
            className="media-icons"
            initial={{scale: 0}}
            whileInView={{scale: [0, 1.5, 1]}}
            >
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
