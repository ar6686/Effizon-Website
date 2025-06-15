import './about.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Nav from './nav';
import Footer from './footer';
import Faq from './faq';

function About() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  
  
  return (
    <>
      <Nav />
      <div className="responsive-container-block bigContainer">
        <div className="responsive-container-block Container">
          <div className="responsive-container-block leftSide">
            <p className="text-blk heading">Meet Our Creative Team</p>
            <p className="text-blk subHeading">
            Effizon is a dynamic web agency offering top-notch web development, SEO, and digital marketing solutions. We create innovative, responsive websites to help businesses of all sizes thrive online. Let us craft a custom solution to elevate your digital presence and drive success.
            </p>
          </div>
          <div className="responsive-container-block rightSide">
            
          <div className="video-container about-video-container">
          <video controls className="video-player" autoPlay muted>
            <source src="assets/work-mp4.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
           
          </div>
        </div>
      </div>
      
      <Faq />
      <div className="contactCard">
    <p>Work With Us</p>
    <h1>Let’s work together to <br /> build something great.</h1>
    <button><Link to="/contact">Contact Us</Link></button>

</div>
      <Footer />

    </>
  )
}

export default About


