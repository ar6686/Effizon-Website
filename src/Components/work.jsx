import './work.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import Nav from './nav';
import Footer from './footer';


function Work() {

  return (
    <>
    <Nav />
      <div className="workWrapper">
  <h2>Our Recent Projects</h2>
  <div className="allworks">

    {/* Work 1 - Website Design for SimpleStyle */}
    <div className="single-work">
      <div className="textofwork">
        <h3>Website Design for SimpleStyle</h3>
        <p>
          We had the pleasure of designing a modern website for **SimpleStyle**, a small fashion boutique. Our team worked closely with the client to create a visually appealing design that captured the essence of their brand, while ensuring a smooth user experience. The final product was a responsive and easy-to-navigate website that helped them attract new customers and grow their online presence.
        </p>
      </div>
      <span />
      <div className="imgofwork">
        <img src="assets/pgwork1-min.webp" alt="Website Design" />
      </div>
    </div>

    {/* Work 2 - Responsive Web Design for TechBasics */}
    <div className="single-work">
      <div className="textofwork">
        <h3>Responsive Web Design for TechBasics</h3>
        <p>
          We delivered a fully responsive web design for **TechBasics**, a startup offering simple tech solutions. The website adapts seamlessly across all devices, providing users with a consistent experience. The client reported higher engagement from mobile users post-launch and was able to expand their audience with this mobile-optimized design.
        </p>
      </div>
      <span />
      <div className="imgofwork">
        <img src="assets/pgwork2-min.webp" alt="Responsive Web Design" />
      </div>
    </div>

    {/* Work 3 - UI/UX Design for EazyShop */}
    <div className="single-work">
      <div className="textofwork">
        <h3>UI/UX Design for EazyShop</h3>
        <p>
          Effizon helped **EazyShop**, an online retail store, improve their UI/UX design by making their platform more intuitive and user-friendly. We focused on simplifying the user journey, which resulted in a 40% increase in customer satisfaction and a smoother shopping experience for their visitors.
        </p>
      </div>
      <span />
      <div className="imgofwork">
        <img src="assets/pgwork3-min.webp" alt="UI/UX Design" />
      </div>
    </div>

    {/* Work 4 - Web Development for GreenLeaf Clinic */}
    <div className="single-work">
      <div className="textofwork">
        <h3>Web Development for GreenLeaf Clinic</h3>
        <p>
          Effizon built a custom website for **GreenLeaf Clinic**, a local healthcare provider. We developed a fast, secure, and easy-to-navigate platform that includes an appointment booking system. The client saw a 30% increase in online bookings and improved patient engagement after the website launch.
        </p>
      </div>
      <span />
      <div className="imgofwork">
        <img src="assets/pgwork4-min.webp" alt="Web Development" />
      </div>
    </div>

    {/* Work 5 - Marketing Materials for BrightFuture Academy */}
    <div className="single-work">
      <div className="textofwork">
        <h3>Marketing Materials for BrightFuture Academy</h3>
        <p>
          We designed a range of marketing materials for **BrightFuture Academy**, a local educational center. Our work included digital assets for social media and print materials for their in-house campaigns. The result was increased student enrollment and greater community engagement, as the marketing materials resonated with their target audience.
        </p>
      </div>
      <span />
      <div className="imgofwork">
        <img src="assets/pgwork5-min.webp" alt="Marketing Materials" />
      </div>
    </div>

    {/* Work 6 - SEO Works & Competitive Analysis for SmartSavings */}
    <div className="single-work">
      <div className="textofwork">
        <h3>SEO Works & Competitive Analysis for SmartSavings</h3>
        <p>
          For **SmartSavings**, a small online savings platform, Effizon implemented an SEO strategy that improved their search engine rankings and boosted organic traffic by 35%. We also conducted a competitive analysis that provided valuable insights, allowing the client to refine their strategy and gain a competitive edge in their market.
        </p>
      </div>
      <span />
      <div className="imgofwork">
        <img src="assets/pgwork6-min.webp" alt="SEO works" />
      </div>
    </div>

  </div>
</div>
<Footer />
</>

  )
}

export default Work;