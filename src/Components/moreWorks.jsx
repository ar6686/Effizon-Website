import './work.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
function MoreWorks() {
    const navigateTopanorama = useNavigate();
    const panoramaClick = () => {
      navigateTopanorama('/works/panorama');
    };
    const navigateTobarber = useNavigate();
    const barberClick = () => {
      navigateTobarber('/works/barber');
    };
    const navigateToDeco = useNavigate();
    const decoClick = () => {
      navigateToDeco('/works/deco');
    };

return(
    <>
    <section className="featuredCard">
          <div className="card" onClick={panoramaClick}>
            <img src="/assets/panorama.webp" alt="" />
            <div className="cardText">
              <h2>Panorama</h2>
              <h2>Web Development, Website Design, Branding, SEO</h2>
              <p>Panorama dental care, a leading dental platform, approached Effizon to revamp their digital presence. The goal was to design a sleek, professional website that reflected their global reach and online presence.</p>
            </div>
          </div>
          <div className="card" onClick={barberClick}>
            <img src="/assets/barber.webp" alt="" />
            <div className="cardText">
              <p>Little Barber</p>
              <h2>Web Development, Website Design, SEO</h2>
              <p>Created a clean, user-friendly portal for little barber shop, offering easy appointment booking, customer management, contact us page and many more features</p>
            </div>
          </div>
          <div className="card" onClick={decoClick}>
            <img src="/assets/de.co-home.webp" alt="" />
            <div className="cardText">
              <i className="fa-solid fa-arrow-up-right-from-square" />
              <p>DE.CO</p>
              <h2>Wanted an engaging platform to enhance their food delivery service.</h2>
              <p>Developed an engaging and responsive website for DE.CO, integrating online ordering, menu customization, contact, join us, and location map for easy access.</p>
            </div>
          </div>
        </section>
    
    
    </>
)




};
export default MoreWorks;