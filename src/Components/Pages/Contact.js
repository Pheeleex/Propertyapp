import React from 'react'
import '../structure/contact.css'

const Contact = () => {
  return (
    <section className="contact">
    <div className="contact-form">
      <div className="text-form">
        <h2>Get in touch</h2>
        <p>
          Welcome! We are delighted that you're interested in getting in touch
          with us. Please fill out the contact form below, and we will respond
          to you as soon as possible. We look forward to hearing from you!
        </p>
      </div>
      <form className="grid-form">
        <div className="forms">
          <label htmlFor="firstname">First name</label>
         
          <input type="text" id="firstname" />
        </div>

        <div className="forms">
          <label htmlFor="lastname">Last name</label>
          <input type="text" id="lastname" />
        </div>

        <div className="forms">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>

        <div className="forms">
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" cols="30" rows="10"></textarea>
        </div>

        <div className="cbox">
          <input type="checkbox" id="check" />
          <label htmlFor="myCheckbox">
            I have read, understood and agreed with the privacy policies
          </label>
        </div>
        <br />
        <button id="submit-btn">Submit</button>
      </form>
    </div>
    <div className="locate">
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.885557362858!2d8.5386682!3d7.6954294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105a7f863910fae5%3A0x2082b793098eb085!2sBrothers%20FM!5e0!3m2!1sen!2sng!4v1687431393116!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="contact-info">
        <h3>Contacts</h3>
        <p>investor.services@Oysterpg.org</p>
        <p>+44 0203 858 9881</p>
      </div>
    </div>
  </section>
  )
}

export default Contact