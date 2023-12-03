import React from 'react'
import "./propertyContact.css"

const PropertyContact = () => {
  return (
    <section className="propertyContact">
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
      <div className="contact-info">
        <h3>Contacts</h3>
        <p>investor.services@Oysterpg.org</p>
        <p>+44 0203 858 9881</p>
      </div>
    </section>
  )
}

export default PropertyContact