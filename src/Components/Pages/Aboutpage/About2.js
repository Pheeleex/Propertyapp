import React from 'react'
import manor from '../../Images/About-Images/manor.jpg'
import manor2 from '../../Images/About-Images/manor2.jpg'

const About2 = () => {
  return (
    <>
      <section className="about2">
        <div className="content">
          <h2>Oyster Property Invest</h2>
          <p>
            Our approach is simple, transparent, and ideal for certified investors looking to invest in the UK property market without the tie of a buy-to-let and benefit from the potential offered by this vibrant market.
          </p>
          <p>
            We're proud of our successes. Since launching in mid-2019, we've provided 11 investment offerings with a total Gross Development Value of almost £400m.
          </p>
          <p>We have repaid over £380m to our lenders over the past 10 years.</p>
          <button>See How it works</button>
        </div>
        <div className="image-boxxx">
          <img src={manor} alt="Manor 1" />
        </div>
      </section>
      <section className="about2">
        <div className="image-boxxx">
          <img src={manor2} alt="Manor 2" />
        </div>
        <div className="content">
          <h2>Our Mission Statement</h2>
          <p>
            Our approach is simple, transparent, and ideal for certified investors looking to invest in the UK property market without the tie of a buy-to-let and benefit from the potential offered by this vibrant market.
          </p>
          <p>
            We're proud of our successes. Since launching in mid-2019, we've provided 11 investment offerings with a total Gross Development Value of almost £400m.
          </p>
          <p>We have repaid over £380m to our lenders over the past 10 years.</p>
        </div>
      </section>
    </>
  )
}

export default About2