import './services.css'
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faCaretDown, faDiamond } from '@fortawesome/free-solid-svg-icons';
import Nav from './nav';
import Footer from './footer';


function services() {
  return (
    <>
      <Nav />
      <div className="servicesHero">
        <h1>A full-service digital innovation partner
        </h1>
        <p>
        At Effizon, we specialize in creating exceptional digital solutions tailored to your needs. Whether you're looking for sleek and functional websites, innovative web applications, or result-driven SEO strategies, our expert team is here to deliver unparalleled quality. Let us help you make a lasting impact online and drive your business forward with confidence.
        </p>
      </div>
      <div className="my-blocks-container">
        <div className="blocks services">
          <div className="block" id="website-design">
            <div className="blocktext">
              <h1>Website Design</h1>
              <p>We design beautiful, functional websites that not only captivate your audience but also offer seamless functionality across all devices. From desktops to mobile phones, your website will look stunning and provide an exceptional user experience no matter the screen size. Let us help you stand out with a responsive design that adapts to any device, ensuring your brand shines everywhere.</p>
              <ul>
                <li>Custom Web Design </li>
                <li>E-commerce Website Design</li>
                <li>Website Redesign</li>
                <li>WordPress Website Design</li>
                <li>Startup Website Design</li>
              </ul>
              <Link to= "/contact">
              <button>Reach us to Explore more</button>
              </Link>
            </div>
            <div className="blockimg">
              <img
                src="/assets/responsive-services.png"
                alt="Website & Responsive Web Design"
              />
            </div>
            
          </div>
          <div className="block" id='web-dev' >
          <div className="blockimg">
              <img
                src="/assets/webdev-service.jpg"
                alt="Website Development"
              />
            </div>
            <div className="blocktext">
              <h1>Web Development</h1>
              <p>Our website development services go beyond just aesthetics. We build high-performing websites that are powerful, scalable, and tailored to your business needs. Whether you need a custom-coded solution or a WordPress-based website, our expertise ensures that your site is fast, secure, and optimized for both performance and user experience.</p>
              <ul>
                <li>Custom Website Development</li>
                <li>Full-Stack Web Development</li>
                <li>WordPress Development</li>
                <li>React Development</li>
                <li>Website Maintenance and Support</li>
              </ul>
              <Link to= "/contact">
              <button>Reach us to Explore more</button>
              </Link>
            </div>
            
          </div>
          <div className="block" id='seo' >
            <div className="blocktext">
              <h1>SEO Services</h1>
              <p>Get your website to the top of search engine results with our proven SEO strategies. We help improve your visibility, attract the right audience, and convert them into loyal customers. By focusing on keyword optimization, on-page SEO, and competitive analysis, we ensure your website is not only seen but also stays ahead of the competition in today’s crowded digital landscape.</p>
              <ul>
                <li>On-Page SEO Optimization</li>
                <li>Off-Page SEO Optimization</li>
                <li>Keyword Research and Analysis</li>
                <li>Competitor Analysis</li>
                <li>SEO-Optimized Blog Writing</li>
              </ul>
              <Link to= "/contact">
              <button>Reach us to Explore more</button>
              </Link>
            </div>
            <div className="blockimg">
              <img
                src="/assets/seo-services.jpeg"
                alt="SEO Services"
              />
            </div>
          </div>
          <div className="block" id='uiux'>
            <div className="blockimg">
              <img
                src="/assets/uiux-services.jpg"
                alt="UI/UX Design"
              />
            </div>
            <div className="blocktext">
              <h1>UI/UX Design</h1>
              <p>Our UI/UX services are crafted to deliver highly intuitive, user-centric designs that transform interactions into seamless experiences. Through meticulous research and rigorous testing, we ensure your interface is both functional and aesthetically pleasing, driving customer engagement and loyalty. A website’s beauty lies not just in how it looks, but in how easily users can navigate through it.</p>
              <ul>
                <li>UI/UX Audits</li>
                <li>UX Writing</li>
                <li>Interaction Design</li>
                <li>UI/UX for E-commerce Websites</li>
                <li>Multi-Device Interface Designing</li>
              </ul>
              <Link to= "/contact">
              <button>Reach us to Explore more</button>
              </Link>
            </div>
          </div>
          

          
        </div>

      </div>

      <div className="contactCard">
    <p>Work With Us</p>
    <h1>Let’s work together to <br /> build something great.</h1>
    <button><Link to="/contact">Contact Us</Link></button>

</div>


      <Footer />

    </>
  )
}

export default services