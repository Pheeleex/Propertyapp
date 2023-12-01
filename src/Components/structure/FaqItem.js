import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <button className={`accordion ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
        {question}
      </button>
      {isOpen && (
        <div className="panel">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
