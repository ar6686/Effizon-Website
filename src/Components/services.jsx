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
              <h1>Full Stack Web App Development</h1>
              <p>We develop fast, scalable, and secure web applications using MERN stack (MongoDB, Express.js, React, Node.js). From sleek frontends to powerful backends, we deliver custom solutions that work flawlessly across devices ideal to grow with your needs.</p>
              <ul>
                <li>Custom Web Application Development </li>
                <li>Website Redesign</li>
                <li>Admin Panels & Dashboards</li>
                <li>API Integration</li>
                <li>Real-time Features</li>
              </ul>
              <Link to="/contact">
                <button>Reach us to Explore more</button>
              </Link>
            </div>
            <div className="blockimg">
              <img
                src="/assets/service_01.webp"
                alt="Website & Responsive Web Design"
              />
            </div>

          </div>
          <div className="block" id='wordpress' >
            <div className="blockimg">
              <img
                src="/assets/service_02.webp"
                alt="Website Development"
              />
            </div>
            <div className="blocktext">
  <h1>WordPress & Shopify Stores</h1>
  <p>We build high-performing WordPress sites and Shopify stores that are SEO-friendly, fully responsive, and built to convert—perfect for blogs, business sites, or booming online shops.</p>
  <ul>
    <li>Custom WordPress Development</li>
    <li>Shopify Store Setup & Management</li>
    <li>Speed & Performance Optimization</li>
    <li>SEO Optimization (On-page & Technical)</li>
    <li>Website Redesign & Revamp</li>
  </ul>
  <Link to="/contact">
    <button>Reach us to Launch Your Website or Store</button>
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
              <Link to="/contact">
                <button>Reach us to Explore more</button>
              </Link>
            </div>
            <div className="blockimg">
              <img
                src="/assets/seo-services.webp"
                alt="SEO Services"
              />
            </div>
          </div>
          <div className="block" id='socialmedia'>
            <div className="blockimg">
              <img
                src="/assets/uiux-services.webp"
                alt="UI/UX Design"
              />
            </div>
            <div className="blocktext">
  <h1>Social Media & Stores</h1>
  <p>We handle your social media and online store so you can focus on growing your business. From creating engaging content to managing orders, inventory, and updates—we ensure your brand stays active, consistent, and profitable across platforms.</p>
  <ul>
    <li>Social Media Content & Scheduling</li>
    <li>Instagram & Facebook Page Management</li>
    <li>Order & Inventory Handling</li>
    <li>Store Updates & Product Uploads</li>
    <li>Customer Engagement & Support</li>
  </ul>
  <Link to="/contact">
    <button>Reach us to Simplify Your Online Management</button>
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