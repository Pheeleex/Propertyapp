import React, { useState } from 'react';


const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="freq-asked">
      <div className="fa-cont">
        <h3>Frequently asked questions</h3>
        <p>Curious about becoming a property development investor? Get the answers you need with your questions tackled.</p>
      </div>
      <div className="faq">
        <AccordionItem
          index={0}
          question="Who is the Oyster Property Group?"
          answer="Oyster Property Group is an independent development and regeneration specialist that has been creating residential-led refurbishment and new build schemes for many years."
         activeIndex={activeIndex}
          handleAccordionClick={handleAccordionClick}
        />

        <AccordionItem
          index={1}
          question="What is Oyster Property Invest?"
          answer="Oyster Property Invest is the fundraising arm of Oyster Property Group. They offer investors a platform to invest in the UK property market, providing a fixed-term investment with either regular, fixed income or capital growth."
          activeIndex={activeIndex}
          handleAccordionClick={handleAccordionClick}
        />

        <AccordionItem
          index={2}
          question="How can I get in touch?"
          answer="If you have any questions or would like to learn more about Oyster Property Invest, you can reach us at:"
          activeIndex={activeIndex}
          handleAccordionClick={handleAccordionClick}
        />
      </div>
    </section>
  );
};

const AccordionItem = ({ index, question, answer, activeIndex, handleAccordionClick}) => {
  const isActive = activeIndex === index
  return (
    <div key={index} className="accordion-item">
      <button className={`accordion ${isActive ? 'activee' : ''}`} onClick={()=>handleAccordionClick(index)}>
        {question}
      </button> 

   {isActive && <div className={`panel ${isActive ? 'activated' : ''}`}>
          <p>{answer}</p>
        </div>}
    </div>
  );
};

export default Accordion;
