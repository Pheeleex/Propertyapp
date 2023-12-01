import React from 'react'
import manor from '../../Images/About-Images/manor.jpg'
import About2 from './About2';
import ManagementSection from '../ManagementSection';
import Accordion from './Faq';
import "../../structure/about.css"

const About = () => {
  return (
        <section className="about">
          <div className="image-box">
            <img src={manor} className="image" alt="About Oyster Property Invest" />
            <div className="text-overlay">
              <h2>About Oyster Property Invest</h2>
              <p>We're the fundraising arm of Oyster Property Group, one of the UK's leading medium-sized housebuilders.</p>
              <p>Oyster Property Group was established in 1995, following a successful track record of creating multi-award-winning homes across London and the South West of the UK we launched Oyster Property Invest in 2019.</p>
              <p>Oyster Property Group was established in 1995, following a successful track record of creating multi-award-winning homes across London and the South West of the UK we launched Oyster Property Invest in 2019.</p>
            </div>
          </div>

          <About2 />
          <ManagementSection />
          <Accordion />
        </section>
      );
}

export default About